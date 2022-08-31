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
      url: 'https://docs.hjcore.io/',
    },
    {
      key: 'gotabitWallet',
      icon: <WalletIcon />,
      label: t('GotaBit Wallet'),
      url: 'https://docs.hjcore.io/',
    },
    {
      key: 'validator',
      icon: <ValidatorIcon />,
      label: t('Validator'),
      url: 'https://docs.hjcore.io/node/setup/installation',
    },
  ]

  return (
    <Box
      sx={{
        mt: ['40px', '76px'],
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
          mt: ['30px', '56px'],
          flexDirection: ['column', 'row', 'row'],
        }}
      >
        {items.map(item => (
          <Card key={item.key} url={item.url} icon={item.icon} label={item.label} />
        ))}
      </Box>
    </Box>
  )
}

export default StartWithSection
