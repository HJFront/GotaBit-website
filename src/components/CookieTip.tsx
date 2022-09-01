import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import GradientButton from './Buttons/GradientButton'

const CookieTip = () => {
  const { t } = useTranslation('common')

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
            target='_blank'
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
            target='_blank'
            rel='noopener'
            href='/cookie'
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
        >
          {t('Got it')}
        </GradientButton>
      </Box>
    </Container>
  )
}

export default CookieTip
