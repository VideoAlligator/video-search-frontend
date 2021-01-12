import styled from 'styled-components'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

export const StyledTextLink = styled(Text).attrs({
  type: TypographyStyles.textLink,
})`
  font-size: 20px;
  font-weight: 600;
  color: white;
`
