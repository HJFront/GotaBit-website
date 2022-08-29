import styled from '@emotion/styled'
import { Box, Grid, TextField, Typography } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import GradientButton from '../Buttons/GradientButton'
import ContactIcons from '../ContactIcons/indexV2'
import Link from '../Link'
import GotaBitLogo from '../NavBar/GotaBitLogo'

const StyledTypography = ({ children }: PropsWithChildren<{}>) => (
  <Typography
    sx={{
      fontWeight: 600,
      fontSize: ['18px', '20px'],
      mb: '20px',
    }}
  >
    {children}
  </Typography>
)

const Footer = () => {
  const { t } = useTranslation('footer')
  const items = [
    {
      key: 'terms',
      label: t('Terms of Service'),
      url: '/',
    },
    {
      key: 'join',
      label: t('Join GotaBit'),
      url: '/',
    },
    {
      key: 'policy',
      label: t('Cookie Policy'),
      url: '/',
    },
    {
      key: 'contract',
      label: t('Contact Us'),
      url: '/',
    },
  ]
  return (
    <Box component='footer' pb={['20px', '30px']}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          alignItems: ['center', 'center', 'start'],
        }}
      >
        <Box
          sx={{
            flex: '1',
            mr: [0, 0, '80px', '140px'],
            minWidth: ['none', '460px', 'auto'],
          }}
        >
          <Box
            sx={{
              width: ['200px', '220px'],
              mb: ['40px', '106px'],
              display: ['none', 'none', 'block'],
            }}
          >
            <GotaBitLogo />
          </Box>
          <StyledTypography>{t('Subscribe for GotaBit Network updates')}</StyledTypography>
          <Box
            sx={{
              display: 'flex',
              boxShadow: '0px 8px 60px -10px rgba(0, 0, 0, 0.15)',
              borderRadius: '10px',
              border: '1px solid #E6ECFB',
              mb: '24px',
            }}
          >
            <TextField
              name='email'
              fullWidth
              id='email'
              placeholder={t('Email placeholder')}
              type='input'
              sx={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                overflow: 'hidden',
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiOutlinedInput-input': {
                  fontSize: '14px',
                },
              }}
            />
            <GradientButton
              variant='contained'
              sx={{
                borderRadius: '10px',
                borderTopLeftRadius: '0',
                borderBottomLeftRadius: '0',
                px: ['40px', '32px'],
              }}
              disableElevation
            >
              {t('Subscribe')}
            </GradientButton>
          </Box>
        </Box>
        <Box
          sx={{
            flex: '1',
            minWidth: ['none', '460px', 'auto'],
          }}
        >
          <StyledTypography>{t('About')}</StyledTypography>
          <Grid container spacing={2} mb={['30px', '46px']}>
            {items.map(item => (
              <Grid item xs={6} key={item.key}>
                <Link
                  href={item.url}
                  sx={{
                    flex: 1,
                    fontSize: '14px',
                    maxWidth: '120px',
                    color: 'rgba(11, 27, 66, 0.7)',
                  }}
                >
                  {item.label}
                </Link>
              </Grid>
            ))}
          </Grid>
          <StyledTypography>{t('Follow Us')}</StyledTypography>
          <Box mt={['20px', '30px']}>
            <ContactIcons />
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          mt: ['60px', '26px'],
          color: 'rgba(11, 27, 66, 0.7)',
          fontSize: ['12px', '14px'],
          textAlign: 'center',
        }}
      >
        {t('Copyright')}
      </Typography>
    </Box>
  )
}

export default Footer
