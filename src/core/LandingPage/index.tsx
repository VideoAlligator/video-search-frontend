import React, { FC } from 'react'

import TopBar from 'common/components/TopBar'
import { SearchInput } from 'common/components/SearchInput'

export const LandingPage: FC = () => {
  return (
    <>
      <TopBar />
      <SearchInput />
    </>
  )
}
