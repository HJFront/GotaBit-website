import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'src/components/Link'
import GradientButton from '../Buttons/GradientButton'
import BgSvg from './BgSvg'
import CopyrightAndContact from './CopyrightAndContact'

const Footer = () => {
  const { t } = useTranslation('footer')

  const footers = [
    {
      title: t('Token'),
      descriptions: [
        {
          text: t('Get GTB'),
          path: '/',
        },
        {
          text: t('GotaBit Wallet'),
          path: '/',
        },
        {
          text: t('GotaBit Explorer'),
          path: '/',
        },
      ],
    },
    {
      title: t('Build'),
      descriptions: [
        {
          text: t('Validators'),
          path: '/',
        },
        {
          text: t('Executors'),
          path: '/',
        },
        {
          text: t('CosmWasm IDE'),
          path: '/',
        },
      ],
    },
    {
      title: t('Resources'),
      descriptions: [
        {
          text: t('Whitepaper'),
          path: '/',
        },
        {
          text: t('Media Kit'),
          path: '/',
        },
        {
          text: t('Contact'),
          path: '/',
        },
        {
          text: t('Blog'),
          path: '/',
        },
        {
          text: t('Team'),
          path: '/',
        },
        {
          text: t('Support'),
          path: '/',
        },
      ],
    },
    {
      title: t('Ecosystem'),
      descriptions: [
        {
          text: t('Network'),
          path: '/',
        },
        {
          text: t('GID'),
          path: '/',
        },
        {
          text: t('Other DApps'),
          path: '/',
        },
      ],
    },
  ]

  return (
    <Box position='relative' component='footer'>
      <BgSvg />
      <Typography
        component='h3'
        sx={{
          fontSize: ['32px', '56px'],
          fontWeight: 600,
          textAlign: ['left', 'center'],
          mb: ['24px', '56px'],
          lineHeight: ['40px', '84px'],
        }}
      >
        {t("Let's create the future together!")}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
        }}
      >
        <Grid flex='1' container spacing={4} justifyContent='space-evenly'>
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant='h6' color='text.primary' gutterBottom fontSize={['18px', '24px']}>
                {footer.title}
              </Typography>
              <ul>
                {footer.descriptions.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      variant='subtitle1'
                      color='text.secondary'
                      fontSize={['14px', '16px']}
                      sx={{
                        display: 'inline-block',
                        my: '4px',
                      }}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box pt={['32px', '4px']} mb='20px'>
          <Typography variant='h6' color='text.primary' gutterBottom fontSize={['18px', '20px']} lineHeight='30px'>
            {t('Subscribe to our newsletter')}
          </Typography>
          <Typography fontSize={['14px', '10px']} mb={['24px', '14px']} color='text.secondary'>
            {t('To get the latest news, articles, and resources weekly via email.')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              boxShadow: '0px 8px 60px -10px rgba(0, 0, 0, 0.15)',
              borderRadius: '10px',
              border: '1px solid #E6ECFB',
            }}
            minWidth={['none', '330px']}
            maxWidth={['none', '400px']}
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
      </Box>
      <CopyrightAndContact />
    </Box>
  )
}

export default Footer
