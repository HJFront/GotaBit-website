import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@mui/material/Container'
import GradientButton from '../Buttons/GradientButton'
import HeroImg from './HeroImg'

const HeroContent = () => {
  const { t } = useTranslation('common')

  return (
    <Box position='relative' mb={['100px', '150px']} mt={['24px', '60px']}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            component='p'
            sx={{
              color: '#003DD9',
              fontSize: ['12px', '16px'],
              mb: '8px',
            }}
          >
            {t('New Generation Block Network')}
          </Typography>
          <Typography
            component='h1'
            sx={{
              fontSize: ['40px', '64px'],
              fontWeight: 600,
              width: ['300px', '400px'],
              lineHeight: 1.2,
              mb: ['8px', '30px'],
            }}
          >
            {t('GotaBit Ecosystem')}
          </Typography>
          <Typography
            component='p'
            sx={{
              fontSize: ['14px', '18px'],
              lineHeight: ['20px', '28px'],
              maxWidth: ['none', 'none', '496px'],
            }}
          >
            {t(
              'An open and interoperable smart contract platform optimised for DeFi applications which can achieve faster, more efficient and lower-cost deployment of applications.'
            )}
          </Typography>
        </Box>
      </Container>

      <Box
        width={['100%', '100%', '720px']}
        sx={{
          position: ['relative', 'relative', 'absolute'],
          top: 0,
          right: 0,
        }}
      >
        <HeroImg />
      </Box>
      <Container maxWidth='lg'>
        <Box
          sx={{
            mx: ['24px', '0'],
            mt: ['40px'],
          }}
        >
          <GradientButton
            variant='contained'
            sx={{
              height: ['56px', '64px'],
              width: ['100%', '214px'],
              borderRadius: ['28px', '32px'],
              fontSize: ['14px', '18px'],
              mr: [0, '24px'],
              mb: ['12px', '0'],
            }}
            disableElevation
          >
            {t('Create')}
          </GradientButton>
          <Button
            variant='outlined'
            sx={{
              width: ['100%', '214px'],
              height: ['56px', '64px'],
              color: '#42A2FF',
              fontSize: ['14px', '18px'],
              border: '1px solid',
              borderImageSource:
                'linear-gradient(93.11deg, #42A2FF 0%, #0B84FF 100%), linear-gradient(0deg, #003DD9, #003DD9)',
              backgroundColor: ['transparent', '#fff'],
              borderRadius: ['28px', '32px'],
              '&:hover': {
                backgroundColor: ['transparent', '#fff'],
                boxShadow: 'none',
                border: '1px solid',
                borderImageSource:
                  'linear-gradient(93.11deg, #42A2FF 0%, #0B84FF 100%), linear-gradient(0deg, #003DD9, #003DD9)',
              },
            }}
            disableElevation
          >
            {t('Application')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroContent
