import * as React from 'react'
import type { NextPage } from 'next'
import Footer from 'src/components/Footer/indexV3'
import NavBar from 'src/components/NavBar'
import HeroContent from 'src/components/Dapp/HeroContent'
import CoreApplication from 'src/components/Dapp/CoreApplication'
import { Container } from '@mui/system'

const Home: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <NavBar />
      <HeroContent />
      <CoreApplication />
      <Footer />
    </Container>
  )
}

export default Home
