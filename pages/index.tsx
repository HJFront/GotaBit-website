import React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import Main from 'src/components/Home/Main'
import CoreModules from 'src/components/Home/CoreModules'
import BuildIng from 'src/components/Home/BuildIng'
import Footer from 'src/components/Footer'
import { prefix } from 'utils/prefix'

const Home: NextPage = () => {
  return (
    <Box position='relative' component='div'>
      <Main />
      <Container maxWidth='lg'>
        {/* <CoreModules /> */}
        <BuildIng />
        <Footer />
      </Container>
    </Box>
  )
}

export default Home
