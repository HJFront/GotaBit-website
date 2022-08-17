import { Box, Container, Typography } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import Link from '../Link'
import { DropdownMenuType } from './DropdownMenu'

interface Props {
  navKey: string
  currentNav?: string
  dropdownMenu?: DropdownMenuType[]
  setCurrentNav: (nav: string) => void
}

const MenuDropdown = ({ navKey, currentNav, dropdownMenu, setCurrentNav, children }: PropsWithChildren<Props>) => {
  const handleOnclick = () => {
    setCurrentNav(isCurrentNav ? '' : navKey)
  }

  const isCurrentNav = currentNav === navKey

  return (
    <Box>
      <Box onClick={handleOnclick}>{children}</Box>
      <Box
        sx={{
          position: 'fixed',
          width: '100vw',
          left: 0,
          zIndex: isCurrentNav ? 11 : 10,
          top: '96px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            transition: 'transform 0.6s, opacity 0.4s',
            // transition: 'all 0.6s',
            zIndex: isCurrentNav ? 2 : 1,
            transform: isCurrentNav ? 'translateY(0)' : 'translateY(-400px)',
            opacity: isCurrentNav ? 1 : 0,
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              pb: '38px',
            }}
          >
            <Container
              maxWidth='lg'
              sx={{
                display: 'flex',
              }}
            >
              {dropdownMenu?.map((menu, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    mr: '30px',
                    '&:last-child': {
                      mr: 0,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fs: '12px',
                      pt: '30px',
                      pb: '16px',
                      pl: '20px',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                      fontWeight: 600,
                      color: 'rgba(0, 0, 0, 0.7)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {menu.label}
                  </Typography>
                  {menu.items.map(item => (
                    <Box
                      key={item.title}
                      sx={{
                        pl: '20px',
                        py: '12px',
                        mt: '20px',
                        borderRadius: '10px',
                        '&: hover': {
                          backgroundColor: '#F5F7FD',
                        },
                      }}
                    >
                      <Link
                        underline='none'
                        href={item.url}
                        sx={{ display: 'flex', alignItems: 'center', fontSize: 0 }}
                      >
                        <ExpandCircleDownOutlinedIcon
                          fontSize='small'
                          sx={{ transform: 'rotate(-90deg)', mr: '4px', fontWeight: '300' }}
                        />
                        <Typography
                          component='h4'
                          sx={{
                            fontSize: '18px',
                            fontWeight: '500',
                          }}
                        >
                          {item.title}{' '}
                        </Typography>
                      </Link>
                      {item?.description && (
                        <Typography
                          component='p'
                          sx={{
                            fontSize: '12px',
                            mt: '10px',
                            color: 'text.secondary',
                            maxWidth: '346px',
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>
              ))}
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MenuDropdown
