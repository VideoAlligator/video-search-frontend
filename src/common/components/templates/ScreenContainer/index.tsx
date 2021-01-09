import React, { FC } from 'react'
import Box from '@material-ui/core/Box'

import TopBar from 'common/components/molecules/TopBar'
import { PageLayout } from '../PageLayout'

export const FocusedScreenContainer: FC = ({ children }) => {
  return (
    <PageLayout
      topBar={
        <Box mx="auto">
          <TopBar />
        </Box>
      }
    >
      {/* set 100% width to remove size adjustments as async data loads */}
      <Box maxWidth={900} mx="auto" pb={4} width="100%">
        {children}
      </Box>
    </PageLayout>
  )
}
