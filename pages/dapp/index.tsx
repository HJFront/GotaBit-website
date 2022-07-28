import * as React from 'react'
import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import Footer from 'src/components/Footer'
import NavBar from 'src/components/NavBar'
import HeroContent from 'src/components/Dapp/HeroContent'
import CoreApplication from 'src/components/Dapp/CoreApplication'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <NavBar />
      <HeroContent />
      <CoreApplication />
      <Footer />
    </>
  )
}

export default Home
