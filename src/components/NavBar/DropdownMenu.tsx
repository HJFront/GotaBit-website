import { Box, Typography } from '@mui/material'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import React from 'react'
import Link from '../Link'

export type DropdownMenuType = {
  label: string
  items: [
    {
      title: string
      description?: string
      url: string
    }
  ]
}
interface Props {
  list?: DropdownMenuType[]
}

const DropdownMenu = ({ list }: Props) => {
  console.log(list)
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      {list?.map(i => (
        <Box
          p='24px'
          key={i.label}
          maxWidth='260px'
          sx={{
            borderRight: '1px solid rgba(0, 0, 0, 0.1)',
            '&:last-child': {
              borderRight: 'none',
            },
          }}
        >
          <Typography
            component='p'
            sx={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '600', mb: '12px' }}
          >
            {i.label}
          </Typography>
          {i.items.map(item => (
            <Box key={item.title}>
              <Link href={item.url}>
                <a>
                  <Typography
                    component='h3'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '18px',
                      fontWeight: '500',
                      mb: '6px',
                      mt: '8px',
                    }}
                  >
                    {item.title}
                    <ExpandCircleDownOutlinedIcon
                      fontSize='small'
                      sx={{ transform: 'rotate(-90deg)', ml: '4px', fontWeight: '300' }}
                    />
                  </Typography>
                </a>
              </Link>
              <Typography component='p' fontSize='12px'>
                {item?.description}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default DropdownMenu
