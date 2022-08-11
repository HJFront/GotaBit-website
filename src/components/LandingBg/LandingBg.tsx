import { Box } from '@mui/system'
import React, { PropsWithChildren } from 'react'

import styles from './index.module.css'

const LandingBgProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>{children}</Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
          overflow: 'hidden',
          top: 0,
          left: 0,
        }}
      >
        <Box className={styles.stars}></Box>
        <Box className={styles.stars2}></Box>
        <Box className={styles.stars3}></Box>
      </Box>
    </Box>
  )
}

export default LandingBgProvider
