import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export const StyledGridContainer = styled(Grid)`
  && {
    flex-wrap: nowrap;
    background: ${({ theme }) => theme.colors.mainBackground};
    min-height: 100%;
  }
`

export const PageGridItem = styled(Grid).attrs({
  item: true,
  role: 'main',
})`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
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
