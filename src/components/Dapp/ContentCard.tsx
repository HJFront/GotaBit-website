import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import LinkIcon from './LinkIcon'

export type CardItemType = {
  key: string
  title: string
  description: string
  icon: React.ReactNode
}

interface Props {
  item: CardItemType
}

const ContentCard = ({ item: { title, description, icon } }: Props) => {
  return (
    <Card
      sx={{
        px: ['30px', '40px'],
        py: ['24px', '40px'],
        maxWidth: ['520px'],
        mb: ['10px', '30px'],
        border: '1px solid rgba(0, 61, 217, 0.1)',
        borderRadius: '24px',
        flex: '1',
        mr: ['0', '30px'],
        '&:nth-of-type(even)': {
          mr: 0,
        },
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: ['16px', '24px'],
        }}
      >
        {icon}
        <Box ml='24px'>
          <Typography
            component='h4'
            sx={{
              fontSize: ['24px', '32px'],
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LinkIcon type='link' />
            <LinkIcon type='twitter' />
          </Box>
        </Box>
      </Box>
      <Typography
        component='p'
        color='text.secondary'
        sx={{
          fontSize: ['14px', '18px'],
        }}
      >
        {description}
      </Typography>
    </Card>
  )
}

export default ContentCard
