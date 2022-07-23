import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import Footer from 'src/components/Footer'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Container maxWidth='lg'>
        <Typography component='h1' color='text.primary'>
          {t('title')}
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default Home
