import React from 'react'

const GotaBitLogo = ({ isLightColor }: { isLightColor?: boolean }) => {
  return (
    <>
      {isLightColor ? (
        <svg
          style={{ width: '100%' }}
          width='176'
          height='41'
          viewBox='0 0 176 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M39.7845 25.2544H20.2154V15.1493H30.3168L30.3187 15.153L39.7845 25.2544Z'
            fill='url(#paint0_linear_30174_3357)'
          />
          <path
            d='M39.7845 25.2545C39.3292 27.0241 38.6342 28.7231 37.7188 30.3043C35.9395 33.3752 33.3877 35.927 30.3168 37.7063C26.4633 39.9299 21.9838 40.82 17.5728 40.2387C13.1619 39.6574 9.06595 37.6371 5.92008 34.491C2.77421 31.3449 0.754167 27.2489 0.173143 22.8379C-0.407881 18.4269 0.48258 13.9475 2.70646 10.0941C4.48621 7.0271 7.03737 4.47912 10.1065 2.70321C12.0694 1.56597 14.2112 0.770607 16.4405 0.351074C17.6839 0.116734 18.9464 -0.000803697 20.2117 4.13578e-06H30.3168V10.1033H20.2117C18.4381 10.1038 16.6959 10.5711 15.1602 11.4582C13.6244 12.3453 12.3492 13.621 11.4626 15.1571C10.576 16.6931 10.1093 18.4355 10.1095 20.2091C10.1096 21.9826 10.5765 23.7249 11.4632 25.2609C12.35 26.7968 13.6254 28.0724 15.1612 28.9593C16.6971 29.8462 18.4394 30.3133 20.2129 30.3136C21.9865 30.3139 23.7289 29.8474 25.265 28.9609C26.8012 28.0745 28.077 26.7994 28.9643 25.2638L39.7845 25.2545Z'
            fill='url(#paint1_linear_30174_3357)'
          />
          <path
            d='M94.9033 17.2917C94.1616 16.1778 93.2064 15.2219 92.0929 14.4795C90.4479 13.389 88.5179 12.8074 86.5443 12.8074C84.5706 12.8074 82.6406 13.389 80.9956 14.4795C79.8841 15.2225 78.9308 16.1783 78.1907 17.2917C77.1874 18.8033 76.6126 20.5586 76.5277 22.371C76.4428 24.1833 76.8509 25.9847 77.7086 27.5835C78.5663 29.1822 79.8414 30.5185 81.3983 31.45C82.9552 32.3816 84.7355 32.8736 86.5498 32.8736C88.3641 32.8736 90.1444 32.3816 91.7013 31.45C93.2582 30.5185 94.5333 29.1822 95.391 27.5835C96.2487 25.9847 96.6568 24.1833 96.5719 22.371C96.487 20.5586 95.9122 18.8033 94.9088 17.2917H94.9033ZM80.36 22.8348C80.3603 21.6118 80.7233 20.4163 81.4031 19.3995C82.0829 18.3828 83.0488 17.5904 84.1789 17.1226C85.309 16.6548 86.5524 16.5326 87.7519 16.7715C88.9514 17.0103 90.0532 17.5994 90.9179 18.4644C91.7826 19.3294 92.3714 20.4313 92.6098 21.6309C92.8483 22.8305 92.7257 24.0738 92.2576 25.2038C91.7895 26.3337 90.9968 27.2994 89.9799 27.9789C88.9629 28.6583 87.7673 29.021 86.5443 29.021C84.9047 29.021 83.3323 28.3699 82.1726 27.211C81.0129 26.052 80.3609 24.4799 80.36 22.8404V22.8348Z'
            fill='white'
          />
          <path
            d='M73.3442 20.0319V27.0532C73.0288 27.5222 72.6825 27.9698 72.3076 28.3928C71.1658 29.6932 69.7789 30.756 68.2263 31.5203C66.6736 32.2847 64.9856 32.7356 63.2586 32.8475C61.5316 32.9594 59.7995 32.73 58.1612 32.1723C56.5229 31.6147 55.0105 30.7397 53.7104 29.5975C52.342 28.4007 51.2372 26.9326 50.4662 25.2862C49.6951 23.6399 49.2747 21.8512 49.2316 20.0338C49.2316 19.9217 49.2316 19.809 49.2316 19.6956C49.2276 16.4943 50.3925 13.4016 52.5076 10.9985C52.8831 10.5693 53.2868 10.1656 53.716 9.79006C55.9876 7.79177 58.8782 6.63677 61.9014 6.51933C64.9246 6.40189 67.896 7.32917 70.3158 9.14521C71.0635 9.69738 71.7455 10.3335 72.3483 11.041L68.8598 13.8661C67.6825 12.5599 66.1368 11.6413 64.4267 11.2318C62.7165 10.8223 60.9224 10.941 59.2812 11.5723C57.6399 12.2036 56.2287 13.3177 55.2337 14.7677C54.2388 16.2177 53.7071 17.9353 53.7086 19.6938V20.0319C53.774 21.7613 54.3539 23.4318 55.3742 24.8297C56.3944 26.2275 57.8086 27.2892 59.4357 27.8787C61.0628 28.4682 62.8287 28.5588 64.5076 28.1389C66.1865 27.719 67.7019 26.8076 68.8598 25.5215V20.0319H73.3442Z'
            fill='white'
          />
          <path
            d='M108.955 16.8816V13.443H105.108V7.97192H101.259V13.443H98.9184V16.8816H101.259V29.034C101.259 29.1698 101.267 29.3055 101.282 29.4405C101.382 30.3854 101.828 31.2598 102.535 31.8954C103.241 32.5309 104.158 32.8826 105.108 32.8828H108.955V29.4405H107.032C106.522 29.4405 106.032 29.2378 105.672 28.8771C105.311 28.5164 105.108 28.0272 105.108 27.517V16.8816H108.955Z'
            fill='white'
          />
          <path
            d='M175 16.8816V13.443H171.153V7.97192H167.304V13.443H164.963V16.8816H167.304V29.034C167.304 29.1707 167.304 29.3074 167.324 29.4405C167.425 30.3856 167.872 31.26 168.579 31.8955C169.286 32.531 170.202 32.8827 171.153 32.8828H175V29.4405H173.076C172.566 29.4405 172.077 29.2378 171.716 28.8771C171.356 28.5164 171.153 28.0272 171.153 27.517V16.8816H175Z'
            fill='white'
          />
          <path
            d='M131.638 22.8405V32.8736H127.789V22.8405C127.79 22.0288 127.63 21.2249 127.32 20.4747C127.01 19.7245 126.555 19.0428 125.982 18.4685C125.408 17.8942 124.727 17.4385 123.977 17.1276C123.227 16.8166 122.424 16.6564 121.612 16.6562V16.6562C119.972 16.6562 118.399 17.3078 117.239 18.4675C116.079 19.6273 115.428 21.2003 115.428 22.8405C115.428 24.4807 116.079 26.0537 117.239 27.2134C118.399 28.3732 119.972 29.0248 121.612 29.0248H124.703V32.8736H121.612C119.367 32.8782 117.186 32.1264 115.42 30.7395C114.782 30.2383 114.207 29.6627 113.706 29.0248C112.548 27.5434 111.83 25.7666 111.633 23.8968C111.437 22.0271 111.77 20.1397 112.594 18.45C113.418 16.7602 114.701 15.3361 116.295 14.3401C117.89 13.3441 119.732 12.8162 121.612 12.8167C124.273 12.8167 126.824 13.8734 128.706 15.7546C130.587 17.6358 131.645 20.1873 131.645 22.8479L131.638 22.8405Z'
            fill='white'
          />
          <path d='M161.606 13.528H157.757V32.8716H161.606V13.528Z' fill='white' />
          <path d='M161.606 7.96265H157.757V11.8114H161.606V7.96265Z' fill='white' />
          <path
            d='M152.925 20.5456C152.333 19.6971 151.58 18.9738 150.708 18.417C151.069 18.0445 151.389 17.6337 151.661 17.192C152.336 16.0897 152.692 14.8221 152.691 13.5298C152.691 13.2897 152.679 13.0498 152.654 12.811C152.477 11.0833 151.666 9.48252 150.376 8.31908C149.087 7.15563 147.412 6.5124 145.675 6.51404H134.81V32.8717H146.499C147.932 32.8718 149.338 32.479 150.563 31.7361C151.789 30.9932 152.788 29.9285 153.45 28.6578C154.113 27.3871 154.415 25.9591 154.323 24.5288C154.231 23.0986 153.749 21.7209 152.929 20.5456H152.925ZM138.655 9.86024H145.677C146.648 9.86024 147.579 10.2461 148.266 10.9329C148.953 11.6197 149.339 12.5511 149.339 13.5224C149.339 14.4937 148.953 15.4252 148.266 16.1119C147.579 16.7987 146.648 17.1846 145.677 17.1846H138.655V9.86024ZM146.495 29.5125H138.655V20.5382H146.495C147.669 20.562 148.788 21.0452 149.61 21.8841C150.432 22.723 150.892 23.8508 150.892 25.0253C150.892 26.1999 150.432 27.3276 149.61 28.1665C148.788 29.0054 147.669 29.4887 146.495 29.5125V29.5125Z'
            fill='white'
          />
          <defs>
            <linearGradient
              id='paint0_linear_30174_3357'
              x1='20.1969'
              y1='15.1327'
              x2='34.0344'
              y2='28.9702'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#0D85FD' />
              <stop offset='1' stopColor='#3A9DFF' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_30174_3357'
              x1='24.1917'
              y1='39.1438'
              x2='13.2236'
              y2='0.892445'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#0D85FD' />
              <stop offset='0.1' stopColor='#1388FD' />
              <stop offset='0.67' stopColor='#2F97FF' />
              <stop offset='1' stopColor='#3A9DFF' />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          style={{ width: '100%' }}
          width='176'
          height='41'
          viewBox='0 0 176 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M39.784 25.2545H20.2148V15.1494H30.3163L30.3181 15.1531L39.784 25.2545Z'
            fill='url(#paint0_linear_29541_953)'
          />
          <path
            d='M39.7845 25.2545C39.3292 27.0241 38.6342 28.7231 37.7188 30.3043C35.9395 33.3752 33.3877 35.927 30.3168 37.7063C26.4633 39.9299 21.9838 40.82 17.5728 40.2387C13.1619 39.6574 9.06595 37.6371 5.92008 34.491C2.77421 31.3449 0.754167 27.2489 0.173143 22.8379C-0.407881 18.4269 0.48258 13.9475 2.70646 10.0941C4.48621 7.0271 7.03737 4.47912 10.1065 2.70321C12.0694 1.56597 14.2112 0.770607 16.4405 0.351074C17.6839 0.116734 18.9464 -0.000803697 20.2117 4.13578e-06H30.3168V10.1033H20.2117C18.4381 10.1038 16.6959 10.5711 15.1602 11.4582C13.6244 12.3453 12.3492 13.621 11.4626 15.1571C10.576 16.6931 10.1093 18.4355 10.1095 20.2091C10.1096 21.9826 10.5765 23.7249 11.4632 25.2609C12.35 26.7968 13.6254 28.0724 15.1612 28.9593C16.6971 29.8462 18.4394 30.3133 20.2129 30.3136C21.9865 30.3139 23.7289 29.8474 25.265 28.9609C26.8012 28.0745 28.077 26.7994 28.9643 25.2638L39.7845 25.2545Z'
            fill='url(#paint1_linear_29541_953)'
          />
          <path
            d='M94.9042 17.292C94.1625 16.178 93.2072 15.2222 92.0938 14.4797C90.4487 13.3892 88.5188 12.8076 86.5451 12.8076C84.5714 12.8076 82.6415 13.3892 80.9964 14.4797C79.885 15.2227 78.9317 16.1785 78.1916 17.292C77.1882 18.8035 76.6135 20.5589 76.5286 22.3712C76.4437 24.1835 76.8518 25.9849 77.7094 27.5837C78.5671 29.1825 79.8423 30.5187 81.3991 31.4503C82.956 32.3818 84.7364 32.8738 86.5507 32.8738C88.3649 32.8738 90.1453 32.3818 91.7022 31.4503C93.259 30.5187 94.5342 29.1825 95.3919 27.5837C96.2495 25.9849 96.6576 24.1835 96.5727 22.3712C96.4878 20.5589 95.9131 18.8035 94.9097 17.292H94.9042ZM80.3608 22.8351C80.3612 21.612 80.7242 20.4165 81.404 19.3998C82.0837 18.383 83.0497 17.5907 84.1798 17.1229C85.3098 16.6551 86.5532 16.5329 87.7527 16.7717C88.9522 17.0105 90.054 17.5997 90.9187 18.4646C91.7834 19.3296 92.3722 20.4315 92.6107 21.6311C92.8492 22.8307 92.7266 24.0741 92.2585 25.204C91.7903 26.3339 90.9977 27.2997 89.9807 27.9791C88.9638 28.6586 87.7682 29.0212 86.5451 29.0212C84.9056 29.0212 83.3331 28.3702 82.1735 27.2112C81.0138 26.0522 80.3618 24.4802 80.3608 22.8406V22.8351Z'
            fill='black'
          />
          <path
            d='M73.3451 20.0321V27.0534C73.0296 27.5224 72.6833 27.9699 72.3085 28.393C71.1666 29.6934 69.7798 30.7561 68.2271 31.5204C66.6744 32.2848 64.9864 32.7358 63.2595 32.8476C61.5325 32.9595 59.8004 32.7301 58.1621 32.1724C56.5238 31.6148 55.0114 30.7399 53.7113 29.5976C52.3428 28.4009 51.238 26.9327 50.467 25.2864C49.696 23.64 49.2756 21.8514 49.2324 20.0339C49.2324 19.9218 49.2324 19.8091 49.2324 19.6958C49.2284 16.4944 50.3934 13.4017 52.5084 10.9986C52.884 10.5694 53.2877 10.1657 53.7168 9.79018C55.9885 7.79189 58.879 6.63689 61.9022 6.51945C64.9254 6.40201 67.8969 7.32929 70.3167 9.14534C71.0644 9.69751 71.7463 10.3336 72.3492 11.0411L68.8607 13.8662C67.6834 12.56 66.1377 11.6415 64.4275 11.2319C62.7174 10.8224 60.9233 10.9411 59.282 11.5724C57.6407 12.2037 56.2295 13.3179 55.2346 14.7678C54.2397 16.2178 53.7079 17.9354 53.7094 19.6939V20.0321C53.7748 21.7614 54.3548 23.4319 55.375 24.8298C56.3953 26.2277 57.8094 27.2893 59.4365 27.8788C61.0636 28.4683 62.8296 28.5589 64.5085 28.139C66.1873 27.7191 67.7027 26.8077 68.8607 25.5216V20.0321H73.3451Z'
            fill='black'
          />
          <path
            d='M108.957 16.8818V13.4432H105.11V7.97217H101.261V13.4432H98.9199V16.8818H101.261V29.0342C101.261 29.17 101.268 29.3057 101.283 29.4407C101.384 30.3857 101.83 31.2601 102.536 31.8956C103.243 32.5311 104.159 32.8829 105.11 32.883H108.957V29.4407H107.033C106.523 29.4407 106.034 29.2381 105.673 28.8774C105.312 28.5166 105.11 28.0274 105.11 27.5173V16.8818H108.957Z'
            fill='black'
          />
          <path
            d='M175.002 16.8818V13.4432H171.155V7.97217H167.306V13.4432H164.965V16.8818H167.306V29.0342C167.306 29.171 167.306 29.3077 167.326 29.4407C167.427 30.3858 167.874 31.2603 168.581 31.8958C169.287 32.5313 170.204 32.8829 171.155 32.883H175.002V29.4407H173.078C172.568 29.4407 172.079 29.2381 171.718 28.8774C171.357 28.5166 171.155 28.0274 171.155 27.5173V16.8818H175.002Z'
            fill='black'
          />
          <path
            d='M131.639 22.8405V32.8736H127.791V22.8405C127.791 22.0288 127.632 21.2249 127.322 20.4747C127.012 19.7245 126.557 19.0428 125.984 18.4685C125.41 17.8942 124.729 17.4385 123.979 17.1276C123.229 16.8166 122.425 16.6564 121.614 16.6562C119.974 16.6562 118.401 17.3078 117.241 18.4675C116.081 19.6273 115.429 21.2003 115.429 22.8405C115.429 24.4807 116.081 26.0537 117.241 27.2134C118.401 28.3732 119.974 29.0248 121.614 29.0248H124.705V32.8736H121.614C119.369 32.8782 117.188 32.1264 115.422 30.7395C114.784 30.2383 114.209 29.6627 113.707 29.0248C112.55 27.5434 111.832 25.7666 111.635 23.8968C111.438 22.0271 111.771 20.1397 112.596 18.45C113.42 16.7602 114.702 15.3361 116.297 14.3401C117.891 13.3441 119.734 12.8162 121.614 12.8167C124.274 12.8167 126.826 13.8734 128.708 15.7546C130.589 17.6358 131.646 20.1873 131.647 22.8479L131.639 22.8405Z'
            fill='black'
          />
          <path d='M161.607 13.5281H157.758V32.8718H161.607V13.5281Z' fill='black' />
          <path d='M161.607 7.96289H157.758V11.8117H161.607V7.96289Z' fill='black' />
          <path
            d='M152.926 20.5457C152.334 19.6972 151.58 18.9739 150.708 18.4171C151.07 18.0446 151.389 17.6339 151.662 17.1921C152.336 16.0898 152.693 14.8223 152.691 13.5299C152.692 13.2898 152.679 13.0499 152.654 12.8112C152.478 11.0834 151.666 9.48264 150.377 8.3192C149.087 7.15576 147.412 6.51252 145.675 6.51416H134.811V32.8718H146.499C147.932 32.8719 149.338 32.4791 150.564 31.7362C151.789 30.9933 152.788 29.9286 153.451 28.6579C154.114 27.3873 154.415 25.9592 154.324 24.5289C154.232 23.0987 153.749 21.721 152.929 20.5457H152.926ZM138.656 9.86037H145.677C146.648 9.86037 147.58 10.2462 148.266 10.933C148.953 11.6198 149.339 12.5513 149.339 13.5225C149.339 14.4938 148.953 15.4253 148.266 16.1121C147.58 16.7989 146.648 17.1847 145.677 17.1847H138.656V9.86037ZM146.495 29.5126H138.656V20.5383H146.495C147.67 20.5621 148.788 21.0453 149.61 21.8843C150.432 22.7232 150.893 23.8509 150.893 25.0255C150.893 26.2 150.432 27.3277 149.61 28.1667C148.788 29.0056 147.67 29.4888 146.495 29.5126Z'
            fill='black'
          />
          <defs>
            <linearGradient
              id='paint0_linear_29541_953'
              x1='20.1964'
              y1='15.1328'
              x2='34.0339'
              y2='28.9703'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#0D85FD' />
              <stop offset='1' stopColor='#3A9DFF' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_29541_953'
              x1='24.1917'
              y1='39.1438'
              x2='13.2236'
              y2='0.892445'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#0D85FD' />
              <stop offset='0.1' stopColor='#1388FD' />
              <stop offset='0.67' stopColor='#2F97FF' />
              <stop offset='1' stopColor='#3A9DFF' />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  )
}

export default GotaBitLogo
