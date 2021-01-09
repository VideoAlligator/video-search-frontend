import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import { muiTheme } from 'common/style/theme'

export const StyledGridContainer = styled(Grid)`
  && {
    flex-wrap: nowrap;
    background: ${({ theme }) => theme.colors.mainBackground};
    min-height: 100%;
  }
`

export const PageGridItem = styled(Grid).attrs({
  item: true,
})`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
`

export const FooterContainer = styled.div`
  padding: 30px;
  background: ${({ theme }) => theme.colors.textPrimary};
  color: white;
`

export const StyledContentContainer = styled(Container).attrs({
  maxWidth: 'xl',
})`
  max-width: 1674px;
  padding-bottom: 24px;
`

export const FullHeightGrid = styled(Grid)`
  && {
    height: 100%;
  }
`

export const TopBarContainer = styled.div`
  padding: 16px 30px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05);

  @media screen and (max-width: ${muiTheme.breakpoints.values.sm}px) {
    padding: 16px;
  }
`
