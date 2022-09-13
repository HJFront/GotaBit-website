import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ContentCard, { CardItemType } from './ContentCard'
import GIDIcon from './Icons/GIDIcon'
import NFTIcon from './Icons/NFTIcon'
import SDKIcon from './Icons/SDKIcon'
import SwapIcon from './Icons/SwapIcon'

const CoreApplication = () => {
  const { t } = useTranslation('dapp')

  const items: CardItemType[] = [
    {
      key: 'GID',
      icon: <GIDIcon />,
      title: t('GID'),
      description: t(
        'GID is building an end-to-end encrypted login service that will allow users to log in to many websites with a single, transferable identity.'
      ),
    },
    {
      key: 'NFT',
      icon: <NFTIcon />,
      title: t('GotaBit NFT'),
      description: t(
        'GotaBit NFT is an open and transparent NFT trading platform where creators can obtain protection of their rights and income from their works.'
      ),
    },
    {
      key: 'Swap',
      icon: <SwapIcon />,
      title: t('GotaBit Swap'),
      description: t('GotaBit Swap is an innovative DEX, NFT marketplace and Launchpad.'),
    },
    {
      key: 'SDK',
      icon: <SDKIcon />,
      title: t('GotaBit SDK'),
      description: t(
        'Gotabit SDK is a development framework for building GotaBit contracts. The purpose of this project is to make the contract development process simple, efficient and scalable.'
      ),
    },
  ]

  return (
    <Box mb={['100px', '140px']} position='relative' pt={['100px', '170px']} id='core-ecological-application'>
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          component='h3'
          sx={{
            fontSize: ['32px', '56px'],
            fontWeight: 600,
            textAlign: ['left', 'center'],
            mb: ['24px', '56px'],
            lineHeight: ['40px', '84px'],
          }}
        >
          {t('Core ecological application')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
          {[items[0], items[1]].map(item => (
            <ContentCard item={item} key={item.key} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
          {[items[2], items[3]].map(item => (
            <ContentCard item={item} key={item.key} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '120%',
          background: '#003DD9',
          opacity: '0.1',
          filter: 'blur(250px)',
          zIndex: -1,
        }}
      ></Box>
    </Box>
  )
}

export default CoreApplication
