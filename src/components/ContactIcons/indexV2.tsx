import Box from '@mui/material/Box'
import React from 'react'

import Link from '../Link'

const Telegram = () => (
  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15 0.46875C6.97266 0.46875 0.46875 6.97266 0.46875 15C0.46875 23.0273 6.97266 29.5312 15 29.5312C23.0273 29.5312 29.5312 23.0273 29.5312 15C29.5312 6.97266 23.0273 0.46875 15 0.46875ZM22.1367 10.4238L19.752 21.6621C19.5762 22.459 19.1016 22.6523 18.4395 22.2773L14.8066 19.5996L13.0547 21.2871C12.8613 21.4805 12.6973 21.6445 12.3223 21.6445L12.5801 17.9473L19.3125 11.8652C19.6055 11.6074 19.248 11.4609 18.8613 11.7188L10.541 16.957L6.95508 15.8379C6.17578 15.5918 6.1582 15.0586 7.11914 14.6836L21.1289 9.28125C21.7793 9.04688 22.3477 9.43945 22.1367 10.4238Z'
      fill='#0B1B42'
    />
  </svg>
)

const Github = () => (
  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.0343 24.156C10.0343 24.28 9.89516 24.3793 9.71976 24.3793C9.52016 24.3979 9.38105 24.2986 9.38105 24.156C9.38105 24.0319 9.52016 23.9326 9.69556 23.9326C9.87702 23.914 10.0343 24.0133 10.0343 24.156ZM8.15323 23.8768C8.11089 24.0009 8.23186 24.1435 8.41331 24.1808C8.57056 24.2428 8.75202 24.1808 8.78831 24.0567C8.8246 23.9326 8.70968 23.79 8.52823 23.7341C8.37097 23.6907 8.19556 23.7527 8.15323 23.8768ZM10.8266 23.7713C10.6512 23.8148 10.5302 23.9326 10.5484 24.0753C10.5665 24.1994 10.7238 24.28 10.9052 24.2366C11.0806 24.1932 11.2016 24.0753 11.1835 23.9512C11.1653 23.8334 11.002 23.7527 10.8266 23.7713ZM14.8065 0C6.41734 0 0 6.53216 0 15.1362C0 22.0158 4.22177 27.9028 10.252 29.9747C11.0262 30.1174 11.2984 29.6273 11.2984 29.2241C11.2984 28.8395 11.2802 26.718 11.2802 25.4152C11.2802 25.4152 7.04637 26.3457 6.15726 23.5666C6.15726 23.5666 5.46774 21.7614 4.47581 21.2962C4.47581 21.2962 3.09073 20.3223 4.57258 20.3409C4.57258 20.3409 6.07863 20.4649 6.90726 21.9414C8.23185 24.3359 10.4516 23.6473 11.3165 23.2379C11.4556 22.2453 11.8488 21.5567 12.2843 21.1473C8.90323 20.7627 5.49194 20.2602 5.49194 14.2926C5.49194 12.5867 5.95161 11.7306 6.91935 10.6388C6.7621 10.2356 6.24798 8.57307 7.07661 6.4267C8.34073 6.02348 11.25 8.10161 11.25 8.10161C12.4597 7.75422 13.7601 7.57433 15.0484 7.57433C16.3367 7.57433 17.6371 7.75422 18.8468 8.10161C18.8468 8.10161 21.756 6.01728 23.0202 6.4267C23.8488 8.57927 23.3347 10.2356 23.1774 10.6388C24.1452 11.7368 24.7379 12.5929 24.7379 14.2926C24.7379 20.2788 21.1754 20.7565 17.7944 21.1473C18.3508 21.6374 18.8226 22.5679 18.8226 24.0257C18.8226 26.1162 18.8044 28.703 18.8044 29.2117C18.8044 29.6149 19.0827 30.105 19.8508 29.9623C25.8992 27.9028 30 22.0158 30 15.1362C30 6.53216 23.1956 0 14.8065 0ZM5.87903 21.3955C5.8004 21.4575 5.81855 21.6002 5.92137 21.718C6.01815 21.8173 6.15726 21.8607 6.23589 21.7801C6.31452 21.718 6.29637 21.5753 6.19355 21.4575C6.09677 21.3582 5.95766 21.3148 5.87903 21.3955ZM5.22581 20.893C5.18347 20.9736 5.24395 21.0729 5.36492 21.1349C5.46169 21.1969 5.58266 21.1783 5.625 21.0915C5.66734 21.0108 5.60685 20.9116 5.48589 20.8496C5.36492 20.8123 5.26815 20.8309 5.22581 20.893ZM7.18548 23.1014C7.08871 23.182 7.125 23.3681 7.26411 23.486C7.40323 23.6287 7.57863 23.6473 7.65726 23.548C7.73589 23.4674 7.6996 23.2813 7.57863 23.1634C7.44556 23.0207 7.26411 23.0021 7.18548 23.1014ZM6.49597 22.1895C6.39919 22.2515 6.39919 22.4128 6.49597 22.5555C6.59274 22.6982 6.75605 22.7602 6.83468 22.6982C6.93145 22.6175 6.93145 22.4562 6.83468 22.3136C6.75 22.1709 6.59274 22.1088 6.49597 22.1895Z'
      fill='#0B1B42'
    />
  </svg>
)

const Twitter = () => (
  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='15' cy='15' r='15' fill='#0B1B42' />
    <path
      d='M12.6104 22.2917C18.7428 22.2917 22.0964 17.0823 22.0964 12.565C22.0964 12.417 22.0934 12.2697 22.087 12.1231C22.7394 11.639 23.3026 11.0395 23.75 10.3529C23.1526 10.6252 22.5098 10.8085 21.8355 10.8911C22.5237 10.4678 23.0522 9.79838 23.3015 9.00027C22.647 9.39839 21.931 9.67902 21.1844 9.83008C20.5761 9.1656 19.71 8.75 18.7508 8.75C16.9097 8.75 15.4167 10.281 15.4167 12.1681C15.4167 12.4364 15.446 12.6973 15.5032 12.9476C12.7323 12.8046 10.2752 11.4443 8.63083 9.37584C8.33467 9.8975 8.17888 10.4904 8.17938 11.0941C8.17938 12.2801 8.76797 13.3271 9.66302 13.9397C9.13359 13.9231 8.61578 13.7765 8.1531 13.5121C8.15261 13.5265 8.15261 13.5404 8.15261 13.5558C8.15261 15.2114 9.30182 16.5936 10.8273 16.9069C10.5408 16.9869 10.2452 17.0274 9.94821 17.0272C9.73791 17.027 9.5281 17.0064 9.32161 16.9655C9.74607 18.3238 10.9769 19.3123 12.4361 19.3399C11.295 20.257 9.85753 20.8032 8.29526 20.8032C8.02648 20.8032 7.76098 20.7875 7.5 20.7559C8.97551 21.7257 10.7275 22.2915 12.6106 22.2915'
      fill='white'
    />
  </svg>
)

const Reddit = () => (
  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z'
      fill='#0B1B42'
    />
    <path
      d='M24.9996 14.9995C24.9996 13.789 24.0171 12.8065 22.8066 12.8065C22.2101 12.8065 21.6838 13.0346 21.2978 13.4205C19.8066 12.3504 17.7364 11.6486 15.4557 11.5609L16.4557 6.87669L19.7014 7.5609C19.7364 8.38546 20.4207 9.05213 21.2628 9.05213C22.1224 9.05213 22.8242 8.35038 22.8242 7.49073C22.8242 6.63108 22.1224 5.92932 21.2628 5.92932C20.6487 5.92932 20.1224 6.2802 19.8768 6.80651L16.2452 6.03459C16.14 6.01704 16.0347 6.03458 15.947 6.08722C15.8593 6.13985 15.8066 6.22757 15.7715 6.33283L14.6663 11.5609C12.3329 11.6311 10.2452 12.3153 8.73644 13.4205C8.35048 13.0521 7.80662 12.8065 7.22767 12.8065C6.01715 12.8065 5.03469 13.789 5.03469 14.9995C5.03469 15.8942 5.56101 16.6486 6.33294 16.9995C6.29785 17.21 6.2803 17.4381 6.2803 17.6662C6.2803 21.0346 10.1926 23.7539 15.0347 23.7539C19.8768 23.7539 23.7891 21.0346 23.7891 17.6662C23.7891 17.4381 23.7715 17.2276 23.7364 17.017C24.4557 16.6662 24.9996 15.8942 24.9996 14.9995ZM9.9996 16.5609C9.9996 15.7013 10.7014 14.9995 11.561 14.9995C12.4207 14.9995 13.1224 15.7013 13.1224 16.5609C13.1224 17.4206 12.4207 18.1223 11.561 18.1223C10.7014 18.1223 9.9996 17.4206 9.9996 16.5609ZM18.7189 20.6837C17.6487 21.7539 15.6136 21.8241 15.0171 21.8241C14.4207 21.8241 12.368 21.7363 11.3154 20.6837C11.1575 20.5258 11.1575 20.2627 11.3154 20.1048C11.4733 19.9469 11.7364 19.9469 11.8943 20.1048C12.561 20.7714 13.9996 21.017 15.0347 21.017C16.0698 21.017 17.4908 20.7714 18.175 20.1048C18.3329 19.9469 18.5961 19.9469 18.754 20.1048C18.8768 20.2802 18.8768 20.5258 18.7189 20.6837ZM18.4382 18.1223C17.5786 18.1223 16.8768 17.4206 16.8768 16.5609C16.8768 15.7013 17.5786 14.9995 18.4382 14.9995C19.2978 14.9995 19.9996 15.7013 19.9996 16.5609C19.9996 17.4206 19.2978 18.1223 18.4382 18.1223Z'
      fill='white'
    />
  </svg>
)

const Medium = () => (
  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='15' cy='15' r='15' fill='#0B1B42' />
    <path
      d='M23.5628 10.2905C23.5449 10.2656 23.5256 10.2407 23.5033 10.2188C23.484 10.1982 23.4647 10.1777 23.4424 10.1602C23.3904 10.1147 23.3354 10.0737 23.2715 10.043L18.7196 7.76953L18.4492 7.63477H18.4477C18.363 7.59229 18.2723 7.56006 18.1802 7.53809C18.0791 7.51318 17.9751 7.5 17.8726 7.5C17.4164 7.5 16.9884 7.73584 16.7536 8.11377L16.0819 9.20508L14.0786 12.4541L12.9983 10.3711C12.915 10.2363 12.7991 10.1309 12.6609 10.062L8.09125 7.78271C8.09125 7.78125 8.08976 7.78125 8.08827 7.77979L7.94412 7.70947C7.75391 7.61426 7.55774 7.56592 7.36158 7.56592C6.72852 7.56592 6.25 8.07129 6.25 8.74219V18.8877C6.25 19.4414 6.61112 20.0229 7.11044 20.272L11.2566 22.3403C11.4676 22.4458 11.6831 22.5 11.8986 22.5C12.594 22.5 13.0978 21.9609 13.0978 21.2168V17.9429L21.4674 22.125V22.1206L21.7601 22.2671C22.0158 22.3945 22.2714 22.459 22.521 22.459C23.2328 22.459 23.75 21.936 23.75 21.2168V10.8135C23.75 10.6172 23.6787 10.4385 23.5628 10.2905ZM12.337 21.2168C12.337 21.5508 12.1557 21.75 11.8986 21.75C11.8079 21.75 11.7069 21.7251 11.5999 21.6724L7.45372 19.6025C7.21 19.481 7.01087 19.1587 7.01087 18.8877V8.74219C7.01087 8.47412 7.15502 8.31592 7.36158 8.31592C7.4344 8.31592 7.51613 8.33496 7.60084 8.37744L7.74648 8.45068H7.74796L12.3176 10.7314C12.3251 10.7358 12.331 10.7432 12.337 10.749V21.2168ZM17.1251 8.95606L17.4045 8.50342C17.504 8.34229 17.6868 8.25 17.8726 8.25C17.9157 8.25 17.9603 8.25586 18.0034 8.26758C18.036 8.2749 18.0702 8.28662 18.1059 8.3042L22.9252 10.7095C22.9267 10.7095 22.9267 10.7109 22.9267 10.7109L22.9312 10.7124C22.9341 10.7139 22.9341 10.7183 22.9371 10.7197C22.9609 10.7388 22.9713 10.771 22.955 10.7974L18.1549 18.5845L17.6645 19.3784L14.4843 13.2393L17.1251 8.95606ZM13.0978 17.1021V12.2109L16.5143 18.8086L13.4411 17.2749L13.0978 17.1021ZM22.9891 21.2168C22.9891 21.5303 22.8004 21.709 22.5225 21.709C22.3977 21.709 22.255 21.6738 22.1049 21.5991L21.4169 21.2549L18.3437 19.7212L22.9891 12.186V21.2168Z'
      fill='white'
    />
  </svg>
)

const Facebook = () => (
  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M30 15.0917C30 6.75676 23.2843 0 15 0C6.71572 0 0 6.75676 0 15.0917C0 22.6244 5.48528 28.8678 12.6563 30V19.4541H8.84767V15.0917H12.6563V11.7668C12.6563 7.98443 14.8956 5.89519 18.322 5.89519C19.9631 5.89519 21.6797 6.18994 21.6797 6.18994V9.90391H19.7882C17.9249 9.90391 17.3438 11.0672 17.3438 12.2607V15.0917H21.5039L20.8389 19.4541H17.3437V30C24.5147 28.8678 30 22.6244 30 15.0917Z'
      fill='#0B1B42'
    />
  </svg>
)

const ContactIcons = () => {
  const icons = [
    {
      component: <Telegram />,
      url: 'https://twitter.com',
    },
    {
      component: <Github />,
      url: 'https://twitter.com',
    },
    {
      component: <Twitter />,
      url: 'https://twitter.com',
    },
    {
      component: <Reddit />,
      url: 'https://twitter.com',
    },
    {
      component: <Medium />,
      url: 'https://twitter.com',
    },
    {
      component: <Facebook />,
      url: 'https://twitter.com',
    },
  ]
  return (
    <Box>
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.url}
          sx={{
            ml: ['20px', '30px'],
            '&:first-of-type': {
              ml: 0,
            },
          }}
        >
          {icon.component}
        </Link>
      ))}
    </Box>
  )
}

export default ContactIcons