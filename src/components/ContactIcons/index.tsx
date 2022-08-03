import Box from '@mui/material/Box'
import React from 'react'
import Twitter from './Twitter'
import Github from './Github'
import Reddit from './Reddit'
import Medium from './Medium'
import Facebook from './Facebook'
import Link from '../Link'

const ContactIcons = () => {
  const icons = [
    {
      component: <Twitter />,
      url: 'https://twitter.com',
    },
    {
      component: <Github />,
      url: 'https://twitter.com',
    },
    {
      component: <Reddit />,
      url: 'https://twitter.com',
    },
    {
      component: <Medium />,
      url: 'https://twitter.com',
    },
    {
      component: <Facebook />,
      url: 'https://twitter.com',
    },
  ]
  return (
    <Box>
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.url}
          sx={{
            ml: '16px',
            '&:first-child': {
              ml: 0,
            },
          }}
        >
          {icon.component}
        </Link>
      ))}
    </Box>
  )
}

export default ContactIcons
