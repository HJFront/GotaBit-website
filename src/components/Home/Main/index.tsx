import React from 'react'
import { Box, Button, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import NavBar from 'src/components/NavBar'
import Title from 'src/components/Title'

const Main = () => {
  const { t } = useTranslation('index')

  return (
    <Box
      position='relative'
      component='div'
      sx={{
        width: '100%',
        height: ['610px', '924px'],
        margin: ['0 auto 80px', '0 auto 148px'],
        zIndex: 1,
        background: 'url("/images/MaskGroup.png") center center no-repeat',
        backgroundSize: 'auto 100%',
        // background: 'url("/images/MaskGroup.png") no-repeat',
        // backgroundPosition: 'center centre',
        // backgroundSize: '100%'
        // backgroundSize: 'cover'
      }}
    >
      <NavBar />
      <Container maxWidth='lg' sx={{ padding: 0 }}>
        <Title sx={{
          mt: ['32px', '62px'],
          fontSize: ['40px', '56px'],
          px: ['20px', 0]
        }}>
          {t("MainTitle")}
        </Title>

        <Box
          sx={{
            display: 'flex',
            justifyContent: ['center'],
            flexDirection: ['column', 'row'],
            mt: '40px',
            mx: ['20px', 0]
          }}
        >
          <Button
            variant='contained'
            sx={{
              width: ['100%', '240px'],
              padding: ['18px 16px'],
              mr: [0, '24px'],
              mb: ['12px', 0],
              color: '#fff',
              fontSize: ['14px', '18px'],
              background: 'linear-gradient(93.11deg, #42A2FF 0%, #0B84FF 100%), #003DD9',
              boxShadow: 'none',
              borderRadius: '100px',
              '&:hover': {
                backgroundColor: '#fff',
                boxShadow: 'none',
              }
            }}
          >
            {t('Start')}
          </Button>
          <Button
            variant='outlined'
            sx={{
              width: ['100%', '240px'],
              padding: ['18px 16px'],
              color: '#42A2FF',
              fontSize: ['14px', '18px'],
              border: '1px solid',
              borderImageSource: 'linear-gradient(93.11deg, #42A2FF 0%, #0B84FF 100%), linear-gradient(0deg, #003DD9, #003DD9)',
              backgroundColor: ['transparent', '#fff'],
              boxShadow: 'none',
              borderRadius: '100px',
              '&:hover': {
                backgroundColor: ['transparent', '#fff'],
                boxShadow: 'none',
                border: '1px solid',
                borderImageSource: 'linear-gradient(93.11deg, #42A2FF 0%, #0B84FF 100%), linear-gradient(0deg, #003DD9, #003DD9)',
              }
            }}
          >
            {t('Join The Community')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Main
