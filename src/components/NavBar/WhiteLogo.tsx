import React from 'react'

const WhiteLogo = ({ fillId }: { fillId?: string }) => {
  const _fillId1 = fillId || 'paint0_linear_30174_3353'
  const _fillId2 = _fillId1 + Math.random()
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M17.9999 11.2521H9.14246V6.75208H13.7142L13.7156 6.75343L17.9999 11.2521Z' fill={`url(#${_fillId1})`} />
      <path
        d='M17.9992 11.252C17.7928 12.0403 17.4779 12.7971 17.0632 13.5014C16.2584 14.8691 15.1035 16.0056 13.7135 16.7975C12.4985 17.4866 11.1387 17.8916 9.73923 17.9811C8.33978 18.0705 6.93816 17.8422 5.64272 17.3136C4.34728 16.785 3.19272 15.9703 2.26829 14.9326C1.34386 13.8949 0.674315 12.6619 0.311414 11.3289C-0.0514869 9.99598 -0.0980228 8.59875 0.175404 7.24526C0.448831 5.89177 1.0349 4.61828 1.8883 3.52323C2.7417 2.42818 3.83958 1.54091 5.09706 0.929989C6.35455 0.31907 7.73795 0.000875006 9.14035 0H13.7135V4.50068H9.14035C8.3375 4.50072 7.54881 4.70871 6.85354 5.10374C6.15827 5.49876 5.58091 6.06692 5.1795 6.75109C4.77809 7.43526 4.56677 8.21135 4.56677 9.00136C4.56677 9.79136 4.7781 10.5675 5.17951 11.2516C5.58092 11.9358 6.15828 12.5039 6.85355 12.899C7.54882 13.294 8.33751 13.502 9.14036 13.502C9.94321 13.5021 10.7319 13.2942 11.4272 12.8992C12.1225 12.5043 12.7 11.9362 13.1014 11.252H17.9992Z'
        fill={`url(#${_fillId2})`}
      />
      <defs>
        <linearGradient id={_fillId1} x1='9.13352' y1='6.74395' x2='15.296' y2='13.0066' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EBF5FF' />
          <stop offset='1' stopColor='white' />
        </linearGradient>
        <linearGradient
          id={_fillId2}
          x1='10.9407'
          y1='17.4383'
          x2='6.12219'
          y2='0.360789'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#E2EAF2' />
          <stop offset='0.25' stopColor='#EFF3F8' />
          <stop offset='0.63' stopColor='#FBFCFD' />
          <stop offset='1' stopColor='white' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WhiteLogo
