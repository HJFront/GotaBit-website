import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactIcons from '../ContactIcons/indexV3'
import Link from '../Link'

const Footer = () => {
  const { t } = useTranslation('footer')
  const items = [
    {
      key: 'join',
      label: t('Join GotaBit'),
      url: 'https://discord.gg/dDgRkVwqD6',
      newTab: true,
    },
    {
      key: 'contract',
      label: t('Contact Us'),
      url: 'mailto:GotaBit@mate.com',
    },
    {
      key: 'terms',
      label: t('Terms'),
      url: '/terms',
    },

    {
      key: 'privacy',
      label: t('Privacy'),
      url: '/cookie',
    },
  ]
  return (
    <Box
      component='footer'
      pb={['20px', '52px']}
      sx={{
        maxWidth: ['320px', '350px'],
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: '30px',
          justifyContent: 'space-between',
        }}
      >
        {items.map(item => (
          <Link
            key={item.key}
            href={item.url}
            target={item.newTab ? '_blank' : undefined}
            rel='noopener'
            underline='none'
            sx={{
              fontSize: '14px',
              color: 'rgba(11, 27, 66, 0.7)',
              mr: ['20px', '30px'],
              '&:last-child': {
                mr: 0,
              },
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>
      <Box>
        <ContactIcons />
      </Box>
      <Typography
        sx={{
          mt: ['30px', '20px'],
          color: 'rgba(11, 27, 66, 0.7)',
          fontSize: ['12px', '14px'],
          textAlign: 'center',
        }}
      >
        {t('Copyright')}
      </Typography>
    </Box>
  )
}

export default Footer
