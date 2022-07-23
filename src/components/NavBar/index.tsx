import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useTheme } from '@mui/material/styles'
import GotaBitLogo from './GotaBitLogo'
import LanguageSelect from '../LanguageSelect'
import Link from '../Link'

const drawerWidth = '100%'
const container = typeof window !== undefined ? () => window.document.body : undefined

const NavBar = () => {
  const { t } = useTranslation('index')
  const theme = useTheme()
  const navItems = [t('GotaBit'), t('Doc')]

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box>
      <AppBar
        component='nav'
        sx={{
          border: 'none',
          // background: 'transparent',
        }}
        variant='outlined'
        elevation={0}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <GotaBitLogo />
          <CloseRoundedIcon color='primary' onClick={handleDrawerToggle} />
        </Toolbar>
        <Divider />
        <List>
          {navItems.map(item => (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <Link
                  href=''
                  underline='none'
                  color='text.primary'
                  variant='subtitle1'
                  sx={{
                    fontWeight: 700,
                    paddingY: '6px',
                  }}
                >
                  {item}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <LanguageSelect />
      </AppBar>
    </Box>
  )

  return (
    <Box>
      <AppBar
        component='nav'
        position='relative'
        sx={{
          border: 'none',
          py: [0, '16px'],
          backgroundColor: {
            xs: theme.palette.background.default,
          },
        }}
        variant='outlined'
        elevation={0}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: ['132px', 'auto'],
            }}
          >
            <GotaBitLogo />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {navItems.map(item => (
              <Link
                key={item}
                color='text.primary'
                href=''
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  marginRight: '50px',
                }}
                underline='none'
              >
                {item}
              </Link>
            ))}
            <LanguageSelect />
          </Box>
          <IconButton
            color='primary'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, paddingRight: 0 }}
          >
            <MenuRoundedIcon />
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default NavBar
