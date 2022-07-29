import { Box } from '@mui/system'
import React from 'react'
import EarthIcon from './Icons/EarthIcon'
import TwitterIcon from './Icons/TwitterIcon'

const LinkIcon = ({ type }: { type: 'link' | 'twitter' }) => {
  return (
    <Box mr='8px'>
      {type === 'link' && <EarthIcon />}
      {type === 'twitter' && <TwitterIcon />}
    </Box>
  )
}

export default LinkIcon
