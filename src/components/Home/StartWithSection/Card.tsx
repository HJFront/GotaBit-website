import { Box, Typography } from '@mui/material'
import React from 'react'

const Card = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <Box
      sx={{
        background: '#111820',
        border: '2px solid rgba(255, 255, 255, 0.6)',
        borderRadius: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: ['26px 36px', '40px 50px'],
        flexDirection: 'column',
        flex: 1,
        ml: [0, 0, '26px'],
        mb: ['26px', '26px', 0],
        '&: first-child': {
          ml: 0,
        },
      }}
    >
      {icon}
      <Typography
        component='h5'
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: ['14px', '20px', '26px'],
          fontWeight: 600,
          mt: '20px',
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

export default Card
