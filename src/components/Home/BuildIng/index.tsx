import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Title from 'src/components/Title'
import BulidItemPaper from 'src/components/Home/BuildIng/BulidItemPaper'
import Identification from './Identification'
import NFT from './NFT'
import GameFi from './GameFi'
import CloudService from './CloudService'
import SocialFi from './SocialFi'


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
    // {
    //   title: t('SocialFi1'),
    //   component: <SocialFi />,
    // },
  ]

  return (
    <Box position='relative' component='div' marginBottom={['100px', '200px']}>
      <Container maxWidth='lg' sx={{ padding: 0 }}>
        <Title sx={{ mb: ['8px', '12px'] }}>{t('Build with us')}</Title>
        <Title type='subTitle' sx={{ mb: ['24px', '56px'] }}>{t('Build with us Subtitle')}</Title>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {buildList.map(item => (
              <Grid position='relative' item xs={2} sm={4} md={4} key={item.title}>
                <BulidItemPaper>
                  {item.component}
                  <Typography
                    variant='h6'
                    color='text.primary'
                    gutterBottom
                    fontSize={['18px', '24px']}
                    lineHeight='120%'
                  >
                    {item.title}
                  </Typography>
                </BulidItemPaper>
              </Grid>
            ))}
            <Grid position='relative' item xs={2} sm={4} md={4}>
              <BulidItemPaper
                sx={{
                  background: 'linear-gradient(93.11deg, #42A2FF 0%, #0B84FF 100%), #003DD9',
                }}
              >
                <Typography
                  variant='h6'
                  color='#fff'
                  gutterBottom
                  fontSize={['16px', '32px']}
                  lineHeight={['120%', '34px']}
                >
                  {t('Deploy your application easily')}
                </Typography>
                <Button
                  variant='contained'
                  sx={{
                    width: ['100%', '50%'],
                    background: '#fff',
                    color: '#003DD9',
                    boxShadow: 'none',
                    borderRadius: '100px',
                    '&:hover': {
                      backgroundColor: '#fff',
                      boxShadow: 'none',
                    },
                  }}
                >
                  {t('Start')}
                </Button>
              </BulidItemPaper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default BuildIng
