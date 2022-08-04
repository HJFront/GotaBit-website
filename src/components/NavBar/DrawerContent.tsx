import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'

import GotaBitLogo from './GotaBitLogo'
import { NavItem } from '.'
import Link from '../Link'
import Facebook from '../ContactIcons/Facebook'
import Twitter from '../ContactIcons/Twitter'
import Github from '../ContactIcons/Github'
import Reddit from '../ContactIcons/Reddit'
import Medium from '../ContactIcons/Medium'
import GradientButton from '../Buttons/GradientButton'
import WhiteLogo from './WhiteLogo'

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    borderTop: 'none',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:before': {
      display: 'none',
    },
  })
)

const AccordionSummary = styled((props: AccordionSummaryProps) => <MuiAccordionSummary {...props} />)(({ theme }) => ({
  '&.Mui-expanded': {
    backgroundColor: 'rgba(11, 27, 66, 0.04)',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg)',
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  backgroundColor: 'rgba(11, 27, 66, 0.04)',
}))

const DrawerContent = ({ onClose, navItems }: { onClose: VoidFunction; navItems: NavItem[] }) => {
  const { t } = useTranslation('index')
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const contacts = [
    {
      icon: <Twitter />,
      label: t('Twitter'),
      url: 'https://twitter.com',
    },
    {
      icon: <Github />,
      label: t('Github'),
      url: 'https://twitter.com',
    },
    {
      icon: <Reddit />,
      label: t('Reddit'),
      url: 'https://twitter.com',
    },
    {
      icon: <Medium />,
      label: t('Medium'),
      url: 'https://twitter.com',
    },
    {
      icon: <Facebook />,
      label: t('Facebook'),
      url: 'https://twitter.com',
    },
  ]
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100%',
      }}
    >
      <AppBar
        component='nav'
        sx={{
          position: 'relative',
          border: 'none',
          background: 'transparent',
          paddingBottom: '30px',
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#0B84FF',
            fontSize: '26px',
          }}
        >
          <Box
            sx={{
              width: '132px',
              mt: ['10px'],
            }}
          >
            <GotaBitLogo />
          </Box>
          <CloseRoundedIcon color='inherit' fontSize='inherit' onClick={onClose} />
        </Toolbar>
        <Box>
          {navItems.map(navItem => (
            <Box
              key={navItem.key}
              sx={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                '&:last-child': {
                  borderBottom: 'none',
                },
              }}
            >
              {navItem?.path ? (
                <AccordionSummary>
                  <Link href={navItem.path}>
                    <Typography component='h2' sx={{ fontSize: '20px', fontWeight: 600 }}>
                      {navItem.label}
                    </Typography>
                  </Link>
                </AccordionSummary>
              ) : (
                <Accordion expanded={expanded === navItem.key} onChange={handleChange(navItem.key)}>
                  <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '12px' }} />}>
                    <Link href=''>
                      <Typography component='h2' sx={{ fontSize: '20px', fontWeight: 600 }}>
                        {navItem.label}
                      </Typography>
                    </Link>
                  </AccordionSummary>
                  <AccordionDetails>
                    {navItem?.dropdownMenu?.map((menu, index) => (
                      <Box
                        key={index}
                        sx={{
                          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                          '&:last-child': {
                            borderBottom: 'none',
                          },
                          p: '16px',
                        }}
                      >
                        <Typography
                          component='p'
                          color='text.secondary'
                          sx={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: 600 }}
                        >
                          {menu.label}
                        </Typography>
                        {menu.items.map(item => (
                          <Box key={item.title} ml='18px'>
                            <Link underline='none' href={item.url}>
                              <Typography
                                component='h4'
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  fontSize: '16px',
                                  fontWeight: '500',
                                  mb: '2px',
                                  mt: '12px',
                                }}
                              >
                                {item.title}{' '}
                                <ExpandCircleDownOutlinedIcon
                                  fontSize='small'
                                  sx={{ transform: 'rotate(-90deg)', ml: '4px', fontWeight: '300' }}
                                />
                              </Typography>
                            </Link>
                            <Typography component='p' fontSize='12px' color='text.secondary'>
                              {item?.description}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    ))}
                    {navItem.key === 'GetInvolved' && (
                      <Box pl='20px'>
                        {contacts.map(item => (
                          <Link
                            underline='none'
                            href={item.url}
                            key={item.label}
                            sx={{
                              '&:hover': {
                                color: 'text.info',
                              },
                            }}
                          >
                            <Box
                              key={item.label}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                pb: '16px',
                              }}
                            >
                              {item.icon}
                              <Typography component='p' fontSize='16px' fontWeight={500} ml='8px'>
                                {item.label}
                              </Typography>
                              <ExpandCircleDownOutlinedIcon
                                fontSize='small'
                                sx={{ transform: 'rotate(-90deg)', ml: '4px', fontWeight: '300' }}
                              />
                            </Box>
                          </Link>
                        ))}
                      </Box>
                    )}
                  </AccordionDetails>
                </Accordion>
              )}
            </Box>
          ))}
        </Box>
      </AppBar>
      <Box px='20px' pb='24px'>
        <Link href='' sx={{ width: '100%' }}>
          <GradientButton
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '56px',
              width: '100%',
              borderRadius: '28px',
            }}
          >
            <Box width='18px' height='18px' mr='8px'>
              <WhiteLogo />
            </Box>
            {t('Launch App')}
          </GradientButton>
        </Link>
      </Box>
    </Box>
  )
}

export default DrawerContent
