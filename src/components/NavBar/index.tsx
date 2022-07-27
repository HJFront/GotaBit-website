import { AppBar, Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'
import { styled, useTheme } from '@mui/material/styles'
import GotaBitLogo from './GotaBitLogo'
import LanguageSelect from '../LanguageSelect'
import Link from '../Link'
import GradientButton from '../Buttons/GradientButton'
import DropdownMenu, { DropdownMenuType } from './DropdownMenu'
import DropdownContact from './DropdownContact'

const drawerWidth = '100%'
const container = typeof window !== undefined ? () => window.document.body : undefined

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    // fontSize: 11,
    filter: 'drop-shadow(2px 2px 5px rgba(0, 0, 0, .15))',
    maxWidth: 800,
    borderRadius: '10px',
    marginTop: '26px !important',
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  [`&	.${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    width: '30px',
    height: '20px',
    marginTop: '-20px !important',
  },
  [`&	.${tooltipClasses.popperArrow}`]: {
    color: 'red',
  },
}))

const NavBar = () => {
  const { t } = useTranslation('index')
  const theme = useTheme()

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    {
      key: 'Learn',
      label: t('Learn'),
      dropdownMenu: [
        {
          label: t('Introduction'),
          items: [
            {
              title: t('What is GotaBit?'),
              description: t('Explore the internal principles of GotaBit and its differences to other blockchains.'),
              url: '/',
            },
            {
              title: t('FQA'),
              url: '/',
            },
          ],
        },
        {
          label: t('Token'),
          items: [
            {
              title: t('What is GotaBit?'),
              description: t('Understand the token economics of GTB.'),
              url: '/',
            },
          ],
        },
      ],
    },
    {
      key: 'Build',
      label: t('Build'),
      dropdownMenu: [
        {
          label: t('Developer'),
          items: [
            {
              title: t('Documentation'),
              description: t('Search for the required tools and instructions for developing on GotaBit.'),
              url: '/',
            },
            {
              title: t('Github'),
              url: '/',
            },
          ],
        },
        {
          label: t('Development Resources'),
          items: [
            {
              title: t('Test the faucet'),
              url: '/',
            },
            {
              title: t('GotaBitscan'),
              url: '/',
            },
            {
              title: t('GotaBit Wallet'),
              url: '/',
            },
          ],
        },
        {
          label: t('Node Verification'),
          items: [
            {
              title: t('Node Application'),
              description: t('Search for the required tools and instructions for developing on GotaBit.'),
              url: '/',
            },
            {
              title: t('Join Discord'),
              url: '/',
            },
          ],
        },
      ],
    },
    {
      key: 'Ecosystem',
      label: t('Ecosystem'),
      path: '/dapp',
    },
    {
      key: 'GetInvolved',
      label: t('Get Involved'),
    },
    {
      key: 'Airdrop',
      label: t('Airdrop'),
      path: '/dapp',
    },
  ]

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
          <ListItem disablePadding>
            <ListItemButton>
              <Link
                href=''
                underline='none'
                color='text.primary'
                variant='subtitle1'
                // sx={{
                //   fontWeight: 700,
                //   paddingY: '6px',
                // }}
              >
                {t('Ecosystem')}
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link
                href=''
                underline='none'
                color='text.primary'
                variant='subtitle1'
                // sx={{
                //   fontWeight: 700,
                //   paddingY: '6px',
                // }}
              >
                {t('Airdrop')}
              </Link>
            </ListItemButton>
          </ListItem>
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
            <Link href='/'>
              <GotaBitLogo />
            </Link>
          </Box>
          <Box sx={{ display: ['none', 'flex'], alignItems: 'center' }}>
            <Grid container spacing={[0, 1, 3, 5, 7]}>
              {navItems.map(item => (
                <Grid item key={item.key}>
                  {item?.path ? (
                    <Link
                      color='text.primary'
                      href={item?.path ?? ''}
                      sx={{
                        display: 'inline-flex',
                        fontWeight: 400,
                        fontSize: 18,
                        alignItems: 'center',
                      }}
                      underline='none'
                    >
                      {item.label}
                      {item?.path ? '' : <KeyboardArrowDownIcon fontSize='small' />}
                    </Link>
                  ) : (
                    <LightTooltip
                      title={
                        item.key === 'GetInvolved' ? (
                          <DropdownContact />
                        ) : (
                          <DropdownMenu list={item.dropdownMenu as unknown as DropdownMenuType[]} />
                        )
                      }
                      placement={item.key === 'Learn' ? 'bottom-start' : undefined}
                      arrow
                    >
                      <Link
                        color='text.primary'
                        href={item?.path ?? ''}
                        sx={{
                          display: 'inline-flex',
                          fontWeight: 400,
                          fontSize: 18,
                          alignItems: 'center',
                        }}
                        underline='none'
                      >
                        {item.label}
                        {item?.path ? '' : <KeyboardArrowDownIcon fontSize='small' />}
                      </Link>
                    </LightTooltip>
                  )}
                </Grid>
              ))}
            </Grid>
            <Box>
              <Link href=''>
                <GradientButton
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '56px',
                    width: ['166px'],
                    borderRadius: '28px',
                    mx: ['16px'],
                  }}
                >
                  <Box width='22px' height='24px' mr='8px' bgcolor='red'></Box>
                  {t('Launch App')}
                </GradientButton>
              </Link>
            </Box>
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
