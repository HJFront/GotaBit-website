import { Box } from '@mui/system'
import React, { PropsWithChildren } from 'react'
import CanvasBg from './CanvasBg'

import styles from './index.module.css'

const LandingBgProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        // background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        background: '#000',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>{children}</Box>
      <CanvasBg />
      {/* <StarField
        width={window.innerWidth}
        height={1000}
        speed={16}
        starSize={1.4}
        starRatio={300}
        starShape='round'
        count={300}
        fps={20}
        noBackground
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          // width: '100vw',
          // height: '100%',
        }}
      /> */}
      {/* <Box
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
      </Box> */}
    </Box>
  )
}

export default LandingBgProvider
