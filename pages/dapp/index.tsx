import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import { useTranslation } from 'react-i18next'
import Footer from 'src/components/Footer'
import NavBar from 'src/components/NavBar'
import HeroContent from 'src/components/Dapp/HeroContent'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <NavBar />
      <HeroContent />
      <Footer />
    </>
  )
}

export default Home
