import { Box, Container, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import GradientButton from './Buttons/GradientButton'

import { IS_ACCEPT_COOKIE } from 'src/utils/constant'
import { getLocalStorage, setLocalStorage } from 'src/utils/localStorage'

const CookieTip = () => {
  const { t } = useTranslation('common')
  const [isAccept, setIsAccept] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isAcceptCookie = useMemo(() => getLocalStorage(IS_ACCEPT_COOKIE), [isAccept])

  const handleClick = () => {
    setLocalStorage(IS_ACCEPT_COOKIE, 'true')
    setIsAccept(true)
  }

  if (isAcceptCookie) return null

  return (
    <Container
      maxWidth='lg'
      sx={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 11,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          px: ['16px', '40px'],
          py: '13px',
          boxShadow: '0px 8px 60px -10px rgba(0, 0, 0, 0.15)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: ['column', 'row'],
        }}
      >
        <Typography
          sx={{
            color: '#525C79',
            fontSize: '14px',
          }}
        >
          {t('We use cookies to provide the best online experience. By using this website, you agree to our')}{' '}
          <Box
            component='a'
            // target='_blank'
            rel='noopener'
            href='/cookie'
            sx={{
              textDecoration: 'none',
              color: '#389DFF',
            }}
          >
            {t('Cookie')}
          </Box>{' '}
          <Box component='span'>{t('and')}</Box>{' '}
          <Box
            component='a'
            // target='_blank'
            rel='noopener'
            href='/terms'
            sx={{
              textDecoration: 'none',
              color: '#389DFF',
            }}
          >
            {t('Privacy Policy')}
          </Box>
          .
        </Typography>
        <GradientButton
          sx={{
            borderRadius: '50px',
            px: '40px',
            py: '10px',
            mt: ['12px', '0'],
            ml: ['0', '24px'],
            whiteSpace: 'nowrap',
          }}
          onClick={handleClick}
        >
          {t('Got it')}
        </GradientButton>
      </Box>
    </Container>
  )
}

export default CookieTip
