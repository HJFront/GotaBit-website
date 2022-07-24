import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Grid, Typography } from '@mui/material'
import GotaBitscan from './GotaBitscan'
import GotaBitWallet from './GotaBitWallet'
import Validator from './Validator'

const CoreModules = () => {
  const { t } = useTranslation('index')

  const coreList = [
    {
      title: t('GotaBitscan'),
      component: <GotaBitscan />,
    },
    {
      title: t('GotaBit Wallet'),
      component: <GotaBitWallet />,
    },
    {
      title: t('Validator'),
      component: <Validator />,
    },
  ]

  return (
    <Box position='relative' component='footer'>
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
          {t('Core modules')}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          <Grid flex='1' container spacing={4} justifyContent='space-evenly' sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
          }}>
            {coreList.map(item => (
              <Grid item sm={3} key={item.title}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: ['row', 'column'],
                  justifyContent: ['flexStart', 'center'],
                }}>
                {item.component}
                <Typography variant='h6' color='text.primary' gutterBottom fontSize={['18px', '24px']}>
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default CoreModules
