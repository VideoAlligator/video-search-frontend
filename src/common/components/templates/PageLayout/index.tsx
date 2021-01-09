import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid'

import {
  StyledContentContainer,
  StyledGridContainer,
  PageGridItem,
  FullHeightGrid,
} from './styled'

interface PageLayoutProps {
  topBar?: React.ReactNode
}

export const PageLayout: FC<PageLayoutProps> = ({ children, topBar }) => {
  return (
    <StyledGridContainer container direction="column" justify="space-between">
      <Grid item>{topBar}</Grid>
      <PageGridItem>
        <StyledContentContainer>
          <FullHeightGrid container direction="row" spacing={3}>
            {children}
          </FullHeightGrid>
        </StyledContentContainer>
      </PageGridItem>
    </StyledGridContainer>
  )
}
