import { Typography, styled, TypographyProps } from '@mui/material'
import { PropsWithChildren } from 'react'

export const Heading1 = ({ children, sx }: PropsWithChildren<TypographyProps>) => (
  <Typography
    component='h1'
    sx={{
      color: 'text.primary',
      fontWeight: 700,
      fontSize: ['40px', '64px'],
      ...sx,
    }}
  >
    {children}
  </Typography>
)

export const Heading2 = ({ children, sx }: PropsWithChildren<TypographyProps>) => (
  <Typography
    component='h2'
    sx={{
      color: 'text.primary',
      fontWeight: 700,
      fontSize: ['20px', '32px'],
      marginBottom: '30px',
      ...sx,
    }}
  >
    {children}
  </Typography>
)

export const Heading3 = ({ children, sx }: PropsWithChildren<TypographyProps>) => (
  <Typography
    component='h2'
    sx={{
      color: 'text.primary',
      fontWeight: 700,
      fontSize: ['16px', '20px'],
      marginBottom: '30px',
      ...sx,
    }}
  >
    {children}
  </Typography>
)

export const TimeDescription = styled(Typography)`
  ${({ theme }) => ({
    color: '#545E7A',
    fontSize: '14px',
  })}
`

export const Description = styled(Typography)`
  ${({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '16px',
    marginBottom: '30px',
  })}
`

export const DescriptionWithBullet = ({ children, sx }: PropsWithChildren<TypographyProps>) => (
  <Typography
    sx={{
      color: 'text.primary',
      fontSize: '16px',
      marginBottom: '30px',
      ...sx,
      '&::before': {
        content: '""',
        display: 'inline-block',
        backgroundColor: '#0F86FF',
        borderRadius: '100%',
        width: '8px',
        height: '8px',
        fontSize: 0,
        mr: '6px',
        mt: '-1px',
        verticalAlign: 'middle',
      },
    }}
  >
    {children}
  </Typography>
)
