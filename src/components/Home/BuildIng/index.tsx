import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import Title from 'src/components/Title'
import Identification from './Identification'
import NFT from './NFT'
import GameFi from './GameFi'
import CloudService from './CloudService'
import SocialFi from './SocialFi'

const useStyles = makeStyles({
  buildList: {
    transition: 'all .25s',
    '& svg': {
      transition: 'transform .25s',
      transitionDelay: '.3s',
      transitionTimingFunction: 'ease',
      transitionDuration: '.4s',
    },
    '&:hover': {
      boxShadow: '0 2px 12px 0 rgb(0 0 0 / 10%)',
      '& svg': {
        transform: 'scale(1.15)',
      },
    },
  },
});

/**
 * BuildIng Module Components
 * @returns
 */
const BuildIng = () => {
  const classes = useStyles();
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
                <Paper
                  className={classes.buildList}
                  sx={{
                    padding: ['16px', '40px'],
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 61, 217, 0.1)',
                    borderRadius: ['20px', '24px'],
                    boxShadow: 'none',
                  }}
                >
                  {item.component}
                  <Typography
                    variant='h6'
                    color='text.primary'
                    gutterBottom
                    fontSize={['18px', '24px']}
                  >
                    {item.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default BuildIng
