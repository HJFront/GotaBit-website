import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'src/components/Link'
import GradientButton from '../Buttons/GradientButton'
import BgSvg from './BgSvg'

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
          text: 'Validators',
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
      <Container maxWidth='lg'>
        <Typography
          component='h3'
          fontWeight='600'
          textAlign={{
            sm: 'center',
          }}
          fontSize={{
            xs: '32px',
            sm: '56px',
          }}
          lineHeight={{
            xs: 1.2,
          }}
          mb={{
            xs: '24px',
            sm: '56px',
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
                  {footer.descriptions.map(item => (
                    <li key={item.text}>
                      <Link href={item.path} variant='subtitle1' color='text.secondary' fontSize={['14px', '16px']}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Box pt={['32px', '0']}>
            <Typography variant='h6' color='text.primary' gutterBottom fontSize={['18px', '20px']} lineHeight='30px'>
              {t('Subscribe to our newsletter')}
            </Typography>
            <Typography fontSize={['14px', '10px']} mb={['24px', '16px']}>
              {t('To get the latest news, articles, and resources weekly via email.')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
              }}
              maxWidth='300px'
            >
              <TextField
                name='email'
                fullWidth
                id='email'
                placeholder={t('Email placeholder')}
                type='input'
                sx={{
                  fontSize: '12px',
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  borderTopRightRadius: '0',
                  borderBottomRightRadius: '0',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
              />
              <GradientButton
                variant='contained'
                sx={{
                  borderRadius: '10px',
                  borderTopLeftRadius: '0',
                  borderBottomLeftRadius: '0',
                  px: ['32px', '18px'],
                }}
                disableElevation
              >
                {t('Subscribe')}
              </GradientButton>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            justifyContent: ['center', 'space-between'],
            alignItems: 'center',
            mt: ['50px', '24px'],
            pb: ['40px', '56px'],
          }}
        >
          <Typography>{t('Copyright')}</Typography>
          <Box>
            <Typography>{t('Copyright')}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
