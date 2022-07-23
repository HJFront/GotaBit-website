import Box from '@mui/material/Box'
import React from 'react'
import Twitter from './Twitter'
import Github from './Github'
import Robot from './Robot'
import M from './M'
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
      component: <Robot />,
      url: 'https://twitter.com',
    },
    {
      component: <M />,
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
          }}
        >
          {icon.component}
        </Link>
      ))}
    </Box>
  )
}

export default ContactIcons
