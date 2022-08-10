import React from 'react'
import { Box, Button, Container, Typography, TypographyProps } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import NavBar from 'src/components/NavBar'
import Title from 'src/components/Title'
import { prefix } from 'utils/prefix'
import LandingBgProvider from 'src/components/LandingBg/LandingBg'
import styles from 'src/components/LandingBg/index.module.css'
import GradientButton from 'src/components/Buttons/GradientButton'
import OutlineButton from 'src/components/Buttons/OutlineButton'

const StyledTypography = styled((props: TypographyProps) => (
  <Typography
    {...props}
    className={styles.title}
    sx={{
      fontWeight: 600,
      fontSize: 'clamp(19px, 3.8vw, 56px)',
      textAlign: 'center',
      color: '#fff',
      textSizeAdjust: 'auto',
    }}
  />
))()

const Main = () => {
  const { t } = useTranslation('index')

  return (
    <LandingBgProvider>
      <Box
        position='relative'
        component='div'
        sx={{
          width: '100%',
          height: ['610px', '924px'],
          margin: ['0 auto 80px', '0 auto 148px'],
          zIndex: 1,
        }}
      >
        <Container maxWidth='lg'>
          <NavBar />
        </Container>
        <Container maxWidth='lg' sx={{ padding: 0 }}>
          <Box mt={['110px']}>
            <StyledTypography>
              <span>{t('Decentralised, Privacy-first')}</span>
            </StyledTypography>
            <StyledTypography>
              <span>{t('Cyberspace of the next generation')}</span>
            </StyledTypography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: ['center'],
              flexDirection: ['column', 'row'],
              mt: '40px',
              mx: ['20px', 0],
            }}
          >
            <GradientButton
              sx={{
                width: ['200px', '280px'],
                height: ['50px', '64px'],
                borderRadius: ['50px', '64px'],
                fontSize: ['14px', '18px'],
                fontWeight: 500,
              }}
              onClick={() => {
                window.open('https://docs.hjcore.io/')
              }}
            >
              {t('Start')}
            </GradientButton>
            <OutlineButton
              sx={{
                width: ['200px', '280px'],
                height: ['50px', '64px'],
                borderRadius: ['50px', '64px'],
                fontSize: ['14px', '18px'],
                fontWeight: 500,
                ml: [0, '28px'],
                mt: ['30px', 0],
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              {t('Join The Community')}
            </OutlineButton>
          </Box>
        </Container>
      </Box>
    </LandingBgProvider>
  )
}

export default Main
