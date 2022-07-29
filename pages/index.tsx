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
    <Box
      position='relative'
      component='div'
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: '284px',
          width: '312px',
          height: '628px',
          display: ['none', 'inline-block'],
        }}
      >
        <Image src={`${prefix}/images/GroupLeftBg.png`} alt='' width={312} height={628} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: '1020px',
          width: '307px',
          height: '760px',
          display: ['none', 'inline-block'],
        }}
      >
        <Image src={`${prefix}/images/GroupRightBg.png`} alt='' width={307} height={760} />
      </Box>
      <Main />
      <Container maxWidth='lg'>
        <CoreModules />
        <BuildIng />
      </Container>
      <Footer />
    </Box>
  )
}

export default Home
