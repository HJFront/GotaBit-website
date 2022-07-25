import React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import { useTranslation } from 'react-i18next'
import Main from 'src/components/Home/Main'
import CoreModules from 'src/components/Home/CoreModules'
import BuildIng from 'src/components/Home/BuildIng'
import Footer from 'src/components/Footer'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Main />
      <Container maxWidth='lg'>
        <CoreModules />
        <BuildIng />
      </Container>
      <Footer />
    </>
  )
}

export default Home
