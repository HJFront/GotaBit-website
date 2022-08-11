import { AppBar, Box, Drawer, Grid, IconButton, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'
import { styled, useTheme } from '@mui/material/styles'
import GotaBitLogo from './GotaBitLogo'
import LanguageSelect from '../LanguageSelect'
import Link from '../Link'
import GradientButton from '../Buttons/GradientButton'
import DropdownMenu, { DropdownMenuType } from './DropdownMenu'
import DropdownContact from './DropdownContact'
import MenuIcon from './MenuIcon'
import DrawerContent from './DrawerContent'
import WhiteLogo from './WhiteLogo'

const drawerWidth = '100%'
const container = typeof window !== undefined ? () => window.document.body : undefined

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    // fontSize: 11,
    filter: 'drop-shadow(2px 2px 5px rgba(0, 0, 0, .15))',
    maxWidth: 900,
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
}))

export type NavItem = {
  key: string
  label: string
  dropdownMenu?: DropdownMenuType[]
  path?: string
}

const NavBar = ({ isLightColor }: { isLightColor?: boolean }) => {
  const { t } = useTranslation('nav')
  const theme = useTheme()

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems: NavItem[] = [
    {
      key: 'Learn',
      label: t('Learn'),
      dropdownMenu: [
        {
          key: 'Introduction',
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
          key: 'Token',
          label: t('Token'),
          items: [
            {
              title: t('What is GTB?'),
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
  ]

  return (
    <Box>
      <AppBar
        component='nav'
        position='relative'
        sx={{
          border: 'none',
          py: [0, '16px'],
          // backgroundColor: {
          //   xs: theme.palette.background.default,
          // },
          backgroundColor: [isLightColor ? 'transparent' : theme.palette.background.default, 'transparent'],
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
              width: ['132px', 'auto'],
              mr: '8px',
              mt: ['10px', '0'],
            }}
          >
            <Link href='/'>
              <GotaBitLogo isLightColor={isLightColor} />
            </Link>
          </Box>
          <Box sx={{ display: ['none', 'none', 'flex'], alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
            <Box>
              <Grid container spacing={[0, 1, 3, 5, 6]}>
                {navItems.map(item => (
                  <Grid item key={item.key}>
                    {item?.path ? (
                      <Link
                        color='text.primary'
                        href={item?.path ?? ''}
                        sx={{
                          display: 'inline-flex',
                          fontWeight: 600,
                          fontSize: 18,
                          alignItems: 'center',
                          color: isLightColor ? 'rgba(255, 255, 255, 0.6)' : '',
                        }}
                        underline='none'
                      >
                        {item.label}
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
                        arrow
                      >
                        <Link
                          color='text.primary'
                          href={item?.path ?? ''}
                          sx={{
                            display: 'inline-flex',
                            fontWeight: 600,
                            fontSize: 18,
                            alignItems: 'center',
                            color: isLightColor ? 'rgba(255, 255, 255, 0.6)' : '',
                          }}
                          underline='none'
                        >
                          {item.label}
                          {item?.path ? (
                            ''
                          ) : (
                            <Box fontSize='18px' ml='4px' mt='6px'>
                              <KeyboardArrowDownIcon fontSize='inherit' />
                            </Box>
                          )}
                        </Link>
                      </LightTooltip>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <LanguageSelect />
            <IconButton
              color='primary'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ display: ['block', 'block', 'none'], mr: '-8px', ml: '10px' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: ['none', 'none', 'block'] }}>
            <Link href=''>
              <GradientButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '48px',
                  width: ['164px'],
                  borderRadius: '24px',
                  ml: ['20px'],
                  fontWeight: 500,
                  fontSize: '16px',
                }}
              >
                <Box width='18px' height='18px' mr='10px' mb='2px'>
                  <WhiteLogo />
                </Box>
                {t('Launch App')}
              </GradientButton>
            </Link>
          </Box>
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
          <DrawerContent navItems={navItems} onClose={handleDrawerToggle} />
        </Drawer>
      </Box>
    </Box>
  )
}

export default NavBar
