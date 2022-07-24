import React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import NavBar from 'src/components/NavBar'
import CoreModules from 'src/components/Home/CoreModules'
import Footer from 'src/components/Footer'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <NavBar />
      <Container maxWidth='lg'>
        <Typography component='h1' color='text.primary'>
          {t('title')}
        </Typography>
        <CoreModules />
      </Container>
      <Footer />
    </>
  )
}

export default Home
