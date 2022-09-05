import React, { PropsWithChildren } from 'react'
import CookieTip from './CookieTip'

const CooikeProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      {children}
      <CookieTip />
    </>
  )
}

export default CooikeProvider
