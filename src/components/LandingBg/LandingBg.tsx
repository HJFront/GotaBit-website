import { Box } from '@mui/system'
import React, { PropsWithChildren } from 'react'

import styles from './index.module.css'

const LandingBgProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '900px',
          background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
          overflow: 'hidden',
        }}
      >
        <Box className={styles.stars}></Box>
        <Box className={styles.stars2}></Box>
        <Box className={styles.stars3}></Box>
      </Box>
      <Box sx={{ position: 'relative', zIndex: 2 }}>{children}</Box>
    </Box>
  )
}

export default LandingBgProvider
