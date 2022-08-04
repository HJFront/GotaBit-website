import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Grid, Typography } from '@mui/material'
import Title from 'src/components/Title'
import CardItm from 'src/components/Home/CardItm'
import GotaBitscan from './GotaBitscan'
import GotaBitWallet from './GotaBitWallet'
import Validator from './Validator'

/**
 * CoreModules Module Components
 * @returns
 */
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
    <Box position='relative' component='div' marginBottom={['100px', '200px']}>
      <Container maxWidth='lg' sx={{ padding: 0 }}>
        <Title>{t('Core modules')}</Title>
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: 'flex',
              flexDirection: ['column', 'row'],
              justifyContent: 'space-evenly',
            }}
          >
            {coreList.map(item => (
              <Grid
                position='relative'
                flex='1'
                item
                key={item.title}
              >
                <CardItm
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: ['row', 'column'],
                    justifyContent: ['flexStart', 'center'],
                    height: ['140px', '300px'],
                    padding: ['0 20px', '0'],
                  }}
                >
                  {item.component}
                  <Typography
                    variant='h6'
                    color='text.primary'
                    gutterBottom
                    fontSize={['18px', '24px']}
                    marginTop={[0, '42px']}
                    marginLeft={['16px', '0']}
                  >
                    {item.title}
                  </Typography>
                </CardItm>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default CoreModules
