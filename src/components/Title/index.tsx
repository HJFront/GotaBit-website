import React, { memo, PropsWithChildren } from 'react'
import { Typography, TypographyProps } from '@mui/material'

interface TitleProps extends TypographyProps {
  /**
   * type
   */
  type: 'title' | 'subTitle';
}

/**
 * Title Components
 * @returns
 */
const Title = ({ type, sx, children }: PropsWithChildren<TitleProps>) => {
  const isSubTitle = type === 'subTitle'

  return (
    <Typography
      component={isSubTitle ? 'h6' : 'h3'}
      sx={type === 'subTitle' ? {
        textAlign: ['center'],
        fontWeight: '400',
        fontSize: ['16px', '24px'],
        width: ['100%', '70%'],
        lineHeight: {
          xs: 1.2,
        },
        mb: ['24px', '56px'],
        mx: ['auto'],
        ...sx,
      } : {
        textAlign: ['center'],
        fontWeight: '600',
        fontSize: ['32px', '56px'],
        lineHeight: {
          xs: 1.2,
        },
        mb: ['24px', '56px'],
        ...sx,
      }}
    >
      {children}
    </Typography>
  )
}

Title.defaultProps = {
  type: 'title',
}

export default memo(Title)
