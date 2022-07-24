import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Grid, Typography } from '@mui/material'
import Title from 'src/components/Title'
import Identification from './Identification'
import NFT from './NFT'
import CloudService from './CloudService'
import SocialFi from './SocialFi'
import GameFi from './SocialFi'

/**
 * BuildIng Module Components
 * @returns 
 */
const BuildIng = () => {
  const { t } = useTranslation('index')

  const buildList = [
    {
      title: t('Identification'),
      component: <Identification />,
    },
    {
      title: t('NFT'),
      component: <NFT />,
    },
    {
      title: t('GameFi'),
      component: <GameFi />,
    },
    {
      title: t('Cloud Service'),
      component: <CloudService />,
    },
    {
      title: t('SocialFi'),
      component: <SocialFi />,
    },
    {
      title: t('SocialFi1'),
      component: <SocialFi />,
    },
  ]

  return (
    <Box position='relative' component='div' marginBottom={['100px', '200px']}>
      <Container maxWidth='lg'>
        <Title sx={{ mb: ['8px', '12px'] }}>{t('Build with us')}</Title>
        <Title type="subTitle" sx={{ mb: ['24px', '56px'] }}>{t('Build with us Subtitle')}</Title>
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
            {buildList.map(item => (
              <Grid item sm={3} key={item.title}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: ['row', 'column'],
                  justifyContent: ['flexStart', 'center'],
                }}>
                {item.component}
                <Typography
                  variant='h6'
                  color='text.primary'
                  gutterBottom fontSize={['18px', '24px']}
                  marginTop={[0, '42px']}
                  marginLeft={['16px', '0']}
                >
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

export default BuildIng
