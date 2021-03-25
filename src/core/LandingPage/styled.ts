import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

export const FullHeightGrid = styled(Grid)`
  && {
    height: 80%;
  }
`

export const HiddenHeading = styled.h1`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
