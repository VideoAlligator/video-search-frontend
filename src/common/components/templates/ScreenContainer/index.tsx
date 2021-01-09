import React, { FC } from 'react'
import Box from '@material-ui/core/Box'

import TopBar from 'common/components/molecules/TopBar'
import { PageLayout } from '../PageLayout'

interface ScreenContainerProps {
  center?: boolean
  maxWidth?: number
}

export const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  center,
  maxWidth,
}) => {
  return (
    <PageLayout
      topBar={
        <Box mx="auto">
          <TopBar />
        </Box>
      }
    >
      {/* set 100% width to remove size adjustments as async data loads */}
      {center ? (
        <Box maxWidth={maxWidth || 900} mx="auto" pb={4} width="100%">
          {children}
        </Box>
      ) : (
        children
      )}
    </PageLayout>
  )
}
