const stars = 800,
  speed = 0.1
class position {
  z: number
  x: number
  y: number
  xPrev: number
  yPrev: number
  constructor(t = 0, n = 0, e = 0) {
    ; (this.x = t), (this.y = n), (this.z = e), (this.xPrev = t), (this.yPrev = n)
  }
  update(t: number, n: number, e: number) {
    ; (this.xPrev = this.x),
      (this.yPrev = this.y),
      (this.z += e * 0.0675),
      (this.x += this.x * (e * 0.0225) * this.z),
      (this.y += this.y * (e * 0.0225) * this.z),
      (this.x > t / 2 || this.x < -t / 2 || this.y > n / 2 || this.y < -n / 2) &&
      ((this.x = Math.random() * t - t / 2),
        (this.y = Math.random() * n - n / 2),
        (this.xPrev = this.x),
        (this.yPrev = this.y),
        (this.z = 0))
  }
  draw(t: {
    lineWidth: number
    beginPath: () => any
    moveTo: (arg0: number, arg1: number) => any
    lineTo: (arg0: number, arg1: number) => any
    stroke: () => any
  }) {
    ; (t.lineWidth = this.z), t.beginPath(), t.moveTo(this.x, this.y), t.lineTo(this.xPrev, this.yPrev), t.stroke()
  }
}
const starsArray = Array.from(
  {
    length: stars,
  },
  () => new position(0, 0, 0)
)
let animationFrame = 0

export function resize(divElement: HTMLDivElement, canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  animationFrame > 0 && cancelAnimationFrame(animationFrame)
  const { clientWidth, clientHeight } = divElement,
    devicePixelRatio = window.devicePixelRatio || 1
    ; (canvasElement.width = clientWidth * devicePixelRatio), (canvasElement.height = clientHeight * devicePixelRatio), (canvasElement.style.width = `${clientWidth}px`), (canvasElement.style.height = `${clientHeight}px`), ctx.scale(devicePixelRatio, devicePixelRatio)
  for (const star of starsArray) (star.x = Math.random() * clientWidth - clientWidth / 2), (star.y = Math.random() * clientHeight - clientHeight / 2), (star.z = 0)
  ctx.translate(clientWidth / 2, clientHeight / 2),
    (ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'),
    (ctx.strokeStyle = 'white'),
    (animationFrame = requestAnimationFrame(() => {
      draw(divElement, ctx)
    }))
}

function draw(divElement: HTMLDivElement, ctx: CanvasRenderingContext2D) {
  const { clientWidth, clientHeight } = divElement
  for (const star of starsArray) star.update(clientWidth, clientHeight, speed), star.draw(ctx)
  ctx.fillRect(-clientWidth / 2, -clientHeight / 2, clientWidth, clientHeight),
    (animationFrame = requestAnimationFrame(() => {
      draw(divElement, ctx)
    }))
}