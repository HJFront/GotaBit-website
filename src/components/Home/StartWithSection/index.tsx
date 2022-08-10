import { Box } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyledTypography } from '../Main'
import WalletIcon from './WalletIcon'
import Card from './Card'
import ScanIcon from './ScanIcon'
import ValidatorIcon from './ValidatorIcon'

const StartWithSection = () => {
  const { t } = useTranslation('index')

  const items = [
    {
      key: 'gotabitScan',
      icon: <ScanIcon />,
      label: t('GotaBit Scan'),
    },
    {
      key: 'gotabitWallet',
      icon: <WalletIcon />,
      label: t('GotaBit Wallet'),
    },
    {
      key: 'validator',
      icon: <ValidatorIcon />,
      label: t('Validator'),
    },
  ]

  return (
    <Box
      sx={{
        mt: ['40px', '70px'],
        pb: ['40px', '60px'],
      }}
    >
      <StyledTypography fontSize={['18px', '40px']}>
        <span>{t('Start with')}</span>
      </StyledTypography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: ['30px', '40px'],
          flexDirection: ['column', 'column', 'row'],
        }}
      >
        {items.map(item => (
          <Card key={item.key} icon={item.icon} label={item.label} />
        ))}
      </Box>
    </Box>
  )
}

export default StartWithSection
