import React, { useRef, useEffect } from 'react'
import { resize } from './canvas'

const CanvasBg: React.FC<{}> = () => {
  const divRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    // Initialize
    if (canvasRef.current && divRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d')
      const canvasElement = canvasRef.current,
        ctx = canvasCtxRef.current,
        divElement = divRef.current,
        re = new ResizeObserver(() => {
          ctx && resize(divElement, canvasElement, ctx)
        })
      re.observe(divElement)
    }
  }, [])

  return (
    <div
      ref={divRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100%',
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default CanvasBg
