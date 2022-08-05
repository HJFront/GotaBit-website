import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import Link from '../Link'
import MenuIcon from '../NavBar/MenuIcon'
import Logo from './Logo'

const drawerWidth = '60%'
const container = typeof window !== undefined ? () => window.document.body : undefined

const LandingNav = () => {
  const { t } = useTranslation('nav')

  const items = [
    {
      key: 'Ecosystem',
      path: '/dapp',
      label: t('Ecosystem'),
    },
    {
      key: 'About',
      path: '/dapp',
      label: t('About'),
    },
  ]

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <AppBar
        component='nav'
        position='relative'
        sx={{
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          border: 'none',
          py: [0, '10px'],
          backgroundColor: ['transparent'],
        }}
        variant='outlined'
        elevation={0}
      >
        <Toolbar
          sx={{
            // width: '100%',
            justifyContent: 'space-between',
          }}
          disableGutters
        >
          <Box
            sx={{
              width: ['118px', 'auto'],
              mr: '8px',
              mt: ['10px', '0'],
            }}
          >
            <Link href='/'>
              <Logo />
            </Link>
          </Box>
          <Box sx={{ display: ['none', 'flex'], alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
            {items.map(item => (
              <Link
                key={item.key}
                href={item.path}
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  ml: '40px',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
          <IconButton
            color='primary'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: ['block', 'none'], mr: '-8px', ml: '10px' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor='right'
          sx={{
            display: ['block', 'block', 'none'],
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
            backgroundColor: ['transparent'],
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: '10px',
              }}
            >
              <CloseRoundedIcon color='info' fontSize='medium' onClick={handleDrawerToggle} />
            </Box>
            <Box>
              {items.map(item => (
                <Typography key={item.key} component='p'>
                  <Link
                    href={item.path}
                    sx={{
                      fontSize: '18px',
                      fontWeight: 600,
                      ml: '20px',
                    }}
                  >
                    {item.label}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}

export default LandingNav
