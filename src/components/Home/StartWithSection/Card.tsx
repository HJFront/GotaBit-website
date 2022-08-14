import { Box, Typography } from '@mui/material'
import React from 'react'

const Card = ({ icon, label, url }: { icon: React.ReactNode; label: string; url: string }) => {
  return (
    <Box
      component='a'
      href={url}
      target='_blank'
      rel='noreferrer'
      sx={{
        background: '#111820',
        border: '2px solid rgba(255, 255, 255, 0.6)',
        borderRadius: '24px',
        display: 'flex',
        justifyContent: ['', '', 'center'],
        alignItems: 'center',
        p: ['26px 36px', '30px 26px', '40px 50px'],
        flexDirection: ['row', 'column', 'column'],
        flex: 1,
        ml: ['auto', '18px', '26px'],
        mr: ['auto', 'auto', 0],
        mb: ['26px', '26px', 0],
        boxShadow: '#13385f 4px 4px 0px 0px',
        '&: first-of-type': {
          ml: ['auto', 'auto', 0],
        },
        '&: hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.1s ease 0s',
          boxShadow: '5px 5px 20px -15px rgba(255, 255, 255, 1)',
          background: '#151E27',
        },
        textDecoration: 'none',
      }}
    >
      <Box
        sx={{
          width: ['50px', '50px', '70px'],
          height: ['50px', '50px', '70px'],
          fontSize: 0,
        }}
      >
        {icon}
      </Box>
      <Typography
        component='h5'
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: ['14px', '16px', '24px'],
          fontWeight: 600,
          mt: [0, '14px', '20px'],
          ml: ['20px', 0, 0],
          minWidth: ['190px', 0, 0],
          textAlign: ['left', 'left', 'center'],
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

export default Card