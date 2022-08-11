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
import StartWithSection from '../StartWithSection'

export const StyledTypography = styled((props: TypographyProps) => (
  <Typography
    fontSize='clamp(19px, 3.8vw, 56px)'
    {...props}
    className={styles.title}
    sx={{
      fontWeight: 600,
      textAlign: 'center',
      color: '#fff',
      lineHeight: 1.2,
    }}
  />
))()

const Main = () => {
  const { t } = useTranslation('index')

  return (
    <Box
      position='relative'
      component='div'
      sx={{
        width: '100%',
        // height: ['610px', '924px'],
        margin: ['0 auto 50px', '0 auto 100px'],
        zIndex: 1,
      }}
    >
      <LandingBgProvider>
        <Container maxWidth='lg'>
          <NavBar isLightColor />

          <Box mt={['76px']}>
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
              alignItems: 'center',
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

          <StartWithSection />
        </Container>
      </LandingBgProvider>
    </Box>
  )
}

export default Main
