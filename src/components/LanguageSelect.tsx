import { Box, ClickAwayListener, MenuItem, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import { LightTooltip } from './NavBar'

const EarthIcon = () => (
  <svg
    width='25'
    height='24'
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ width: '100%' }}
  >
    <path
      d='M12.7615 3.49428e-10C12.3313 3.49428e-10 11.9014 0.0231287 11.4737 0.069236C11.0816 0.109286 10.6944 0.174967 10.3123 0.254666C10.2384 0.270136 10.1644 0.286456 10.0905 0.303527C7.83954 0.816064 5.78417 1.96704 4.17087 3.61845C4.02084 3.77224 3.87398 3.93058 3.73036 4.09344C-0.627657 9.09705 -0.104655 16.6865 4.89855 21.0449C9.68847 25.2175 16.8985 24.9399 21.3535 20.4113C21.5038 20.2575 21.6506 20.0992 21.794 19.9363C23.7172 17.7459 24.7771 14.9299 24.7754 12.0149C24.7754 5.37918 19.3966 -5.00619e-05 12.7615 3.49428e-10ZM4.70468 4.21919C4.76795 4.15351 4.83363 4.09063 4.8981 4.02695C4.97259 3.95366 5.04668 3.87997 5.12276 3.80908C5.18964 3.7466 5.25852 3.68653 5.327 3.62565C5.40429 3.55717 5.48118 3.48868 5.56047 3.4226C5.63015 3.36373 5.70183 3.30726 5.77311 3.25039C5.8532 3.18631 5.9333 3.12223 6.01579 3.06055C6.08868 3.00568 6.16276 2.95242 6.23725 2.90035C6.32014 2.84108 6.40344 2.7802 6.48794 2.72494C6.56362 2.67367 6.64011 2.62401 6.717 2.57475C6.8027 2.51988 6.8888 2.46581 6.9757 2.41455C7.05394 2.36784 7.13268 2.32188 7.21197 2.27678C7.30062 2.22632 7.38962 2.17705 7.47908 2.129C7.55917 2.08629 7.63926 2.04449 7.71935 2.00364C7.81066 1.95758 7.90276 1.91313 7.99527 1.86947C8.07536 1.83143 8.15866 1.79338 8.24115 1.75733C8.33526 1.71728 8.43057 1.67723 8.52588 1.63718C8.60878 1.60314 8.69127 1.5699 8.77497 1.53786C8.87188 1.50101 8.96999 1.46657 9.06811 1.43213C9.1518 1.40289 9.2355 1.37366 9.3204 1.34602C9.42011 1.31398 9.52063 1.28435 9.62154 1.25511C9.70604 1.23068 9.78974 1.20545 9.87463 1.18262C9.90707 1.17421 9.93951 1.1674 9.97195 1.15899C8.78658 2.31007 7.90692 3.73864 7.4126 5.31535C6.46211 5.06464 5.54195 4.7105 4.66864 4.25924C4.68186 4.24522 4.69307 4.23121 4.70468 4.21919ZM4.12882 4.86399C5.09078 5.38524 6.11085 5.79124 7.16792 6.0735C6.64972 7.87553 6.37771 9.7394 6.35939 11.6144H1.55786C1.64511 9.14186 2.5492 6.76801 4.12882 4.86399ZM4.12882 19.1658C2.5493 17.2617 1.64521 14.8878 1.55786 12.4154H6.35939C6.37771 14.2904 6.64967 16.1542 7.16792 17.9563C6.1109 18.2386 5.09083 18.6446 4.12882 19.1658ZM9.87223 22.8487C9.79134 22.8283 9.70764 22.8019 9.62435 22.7774C9.52303 22.7478 9.42131 22.7182 9.3212 22.6857C9.2367 22.6585 9.1534 22.6293 9.07011 22.6C8.97159 22.566 8.87308 22.5311 8.77577 22.4939C8.69247 22.4623 8.61038 22.429 8.52788 22.3954C8.43217 22.3553 8.33646 22.3153 8.24155 22.2752C8.15986 22.2392 8.07857 22.2021 7.99767 22.1639C7.90437 22.1198 7.81146 22.075 7.71735 22.0285C7.63726 21.9885 7.55717 21.9484 7.47707 21.9048C7.38657 21.8563 7.29687 21.8066 7.20716 21.7554C7.12707 21.7109 7.05098 21.6653 6.97369 21.6188C6.88559 21.5659 6.79909 21.5115 6.71259 21.4558C6.63651 21.4073 6.56042 21.3581 6.48553 21.3076C6.40023 21.25 6.31574 21.1899 6.23204 21.1298C6.15876 21.0773 6.08547 21.0249 6.01339 20.9696C5.93049 20.9071 5.8492 20.8426 5.76831 20.7778C5.69742 20.7213 5.62694 20.6652 5.55766 20.6072C5.47757 20.5407 5.40028 20.4714 5.32259 20.4025C5.25451 20.342 5.18604 20.2824 5.11956 20.2207C5.04307 20.1494 4.96899 20.0753 4.8945 20.002C4.83003 19.9383 4.76435 19.8754 4.70108 19.8102C4.68946 19.7977 4.67825 19.7849 4.66664 19.7729C5.53989 19.3215 6.46005 18.9672 7.4106 18.7164C7.90502 20.2931 8.78463 21.7216 9.96994 22.8728C9.93751 22.8644 9.90467 22.8575 9.87223 22.8487ZM12.3611 23.1972C10.6475 22.9537 9.14539 21.165 8.20031 18.5238C9.56668 18.2178 10.961 18.0536 12.3611 18.034V23.1972ZM12.3611 17.233C10.8759 17.2525 9.39693 17.4289 7.94882 17.7592C7.44599 16.0217 7.18073 14.2241 7.16031 12.4154H12.3611V17.233ZM12.3611 11.6144H7.16031C7.18068 9.80568 7.44594 8.00805 7.94882 6.27054C9.39693 6.6008 10.8759 6.77722 12.3611 6.79679V11.6144ZM12.3611 5.9958C10.961 5.97627 9.56668 5.81212 8.20031 5.50599C9.14539 2.86471 10.6475 1.07609 12.3611 0.832584V5.9958ZM21.3943 4.86399C22.9738 6.76806 23.8779 9.14191 23.9653 11.6144H19.1637C19.1454 9.7394 18.8734 7.87553 18.3552 6.0735C19.4122 5.79109 20.4323 5.38514 21.3943 4.86399ZM15.6477 1.18062C15.7318 1.20144 15.8155 1.22788 15.8988 1.25231C16.0001 1.28194 16.1018 1.31158 16.2019 1.34402C16.2864 1.37125 16.3697 1.40049 16.453 1.42973C16.5515 1.46377 16.65 1.49861 16.7473 1.53586C16.8306 1.5675 16.9127 1.60074 16.9952 1.63438C17.0909 1.67443 17.1867 1.71448 17.2816 1.75453C17.3633 1.79057 17.4445 1.82767 17.5254 1.86587C17.6187 1.90992 17.7117 1.95478 17.8058 2.00124C17.8859 2.04129 17.966 2.08134 18.046 2.12499C18.1365 2.17345 18.2262 2.22311 18.316 2.27438C18.396 2.31883 18.4721 2.36449 18.5494 2.41095C18.6375 2.46381 18.724 2.51828 18.8105 2.57395C18.8866 2.62241 18.9627 2.67167 19.0376 2.72213C19.1229 2.7798 19.207 2.83948 19.2907 2.89955C19.3644 2.95202 19.4376 3.00488 19.5101 3.05975C19.5926 3.12183 19.6735 3.18631 19.7548 3.25119C19.8253 3.30726 19.8962 3.36333 19.9655 3.4218C20.0455 3.48828 20.1228 3.55757 20.2005 3.62646C20.2686 3.68693 20.3371 3.7466 20.4036 3.80828C20.48 3.87957 20.5541 3.95366 20.6286 4.02695C20.6931 4.09063 20.7588 4.15351 20.822 4.21879C20.8337 4.23121 20.8449 4.24402 20.8565 4.25604C19.9832 4.7075 19.0631 5.06179 18.1125 5.31255C17.6171 3.73569 16.7364 2.30727 15.55 1.15659C15.5824 1.165 15.6152 1.17181 15.6477 1.18062ZM13.162 0.832584C14.8756 1.07609 16.3777 2.86471 17.3228 5.50599C15.9564 5.81197 14.5621 5.97612 13.162 5.9958V0.832584ZM13.162 6.79679C14.6472 6.77727 16.1262 6.60085 17.5743 6.27054C18.0771 8.00805 18.3424 9.80568 18.3628 11.6144H13.162V6.79679ZM13.162 12.4154H18.3628C18.3424 14.2241 18.0772 16.0217 17.5743 17.7592C16.1262 17.429 14.6472 17.2525 13.162 17.233V12.4154ZM13.162 23.1972V18.034C14.5621 18.0535 15.9564 18.2176 17.3228 18.5238C16.3777 21.165 14.8756 22.9537 13.162 23.1972ZM20.8184 19.8106C20.7552 19.8758 20.6899 19.9387 20.6254 20.0024C20.5509 20.0757 20.4764 20.1498 20.4 20.2211C20.3335 20.2831 20.265 20.3412 20.1969 20.4033C20.1192 20.4722 20.0419 20.5411 19.9627 20.6076C19.8926 20.666 19.8213 20.7225 19.75 20.7794C19.6699 20.8434 19.5898 20.9075 19.5073 20.9692C19.4344 21.0241 19.3604 21.0773 19.2859 21.1294C19.203 21.1887 19.1197 21.2495 19.0352 21.3048C18.9595 21.3561 18.883 21.4057 18.8061 21.4546C18.7204 21.5099 18.6341 21.5633 18.547 21.6148C18.4669 21.6617 18.3904 21.7073 18.3115 21.7526C18.2229 21.803 18.1337 21.8523 18.044 21.9004C17.9639 21.9431 17.8839 21.9849 17.8038 22.0257C17.7125 22.0718 17.6204 22.1162 17.5278 22.1599C17.4478 22.1979 17.3645 22.236 17.282 22.272C17.1879 22.3121 17.0925 22.3521 16.9972 22.3922C16.9143 22.4258 16.8318 22.4595 16.7485 22.4911C16.6508 22.5283 16.5527 22.5632 16.4542 22.5972C16.3709 22.6265 16.2876 22.6557 16.2031 22.6829C16.103 22.7154 16.0029 22.745 15.9008 22.7742C15.8171 22.7991 15.733 22.8239 15.6485 22.8467C15.616 22.8551 15.5836 22.862 15.5512 22.8704C16.7365 21.7193 17.6162 20.2907 18.1105 18.714C19.061 18.9647 19.9812 19.3189 20.8545 19.7701C20.8413 19.7845 20.83 19.7985 20.8184 19.8106ZM21.3943 19.1658C20.4323 18.6445 19.4123 18.2385 18.3552 17.9563C18.8734 16.1542 19.1454 14.2904 19.1637 12.4154H23.9653C23.8781 14.8878 22.9739 17.2617 21.3943 19.1658Z'
      fill='rgba(255, 255, 255, 0.6)'
    />
  </svg>
)

const supportLanguages = [
  {
    key: 'en',
    label: 'English',
  },
  {
    key: 'zh',
    label: '简体中文',
  },
]

const LanguageSelect = () => {
  const { i18n } = useTranslation()

  const [open, setOpen] = useState(false)

  // fix the react-hydration-error
  // more details https://github.com/vercel/next.js/discussions/35773#discussioncomment-2622885
  // const [mounted, setMounted] = useState(false)
  // useEffect(() => setMounted(true), [])
  // if (!mounted) return null

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  const handleLanguageChange = (lan: string) => {
    i18n.changeLanguage(lan)
    handleTooltipClose()
  }

  const PopUp = (
    <Box py={['10px']}>
      {supportLanguages.map(lan => (
        <MenuItem
          value={lan.key}
          key={lan.key}
          onClick={e => {
            e.stopPropagation()
            handleLanguageChange(lan.key)
          }}
          sx={{
            fontSize: ['12px', '16px'],
            fontWeight: 600,
            color: i18n?.language == lan.key ? 'text.info' : 'text.primary',
            '&:hover': {
              color: 'text.info',
            },
          }}
        >
          {lan.label}
        </MenuItem>
      ))}
    </Box>
  )

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Box
          component='div'
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            border: '1px solid',
            borderRadius: '100px',
            p: ['6px 12px', '12px 20px'],
            color: 'rgba(255, 255, 255, 0.3)',
            ml: ['30px'],
          }}
          onClick={handleTooltipOpen}
        >
          <Box
            sx={{
              width: ['18px', 'auto'],
              fontSize: 0,
            }}
          >
            <EarthIcon />
          </Box>

          <LightTooltip
            title={PopUp}
            arrow
            onClose={handleTooltipClose}
            open={isMobile ? open : undefined}
            disableFocusListener={isMobile ? true : undefined}
            disableHoverListener={isMobile ? true : undefined}
            disableTouchListener={isMobile ? true : undefined}
          >
            <Typography
              component='p'
              // color='primary'
              sx={{
                fontSize: ['12px', '16px'],
                fontWeight: 600,
                marginLeft: '6px',
                color: 'rgba(255, 255, 255, 0.6)',
                '&:hover': {
                  color: 'text.info',
                },
              }}
            >
              {i18n?.language == 'en' ? supportLanguages[0].label : supportLanguages[1].label}
            </Typography>
          </LightTooltip>
        </Box>
      </div>
    </ClickAwayListener>
  )
}

export default memo(LanguageSelect)
