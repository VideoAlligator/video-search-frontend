import styled from 'styled-components'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

export const MainTextLink = styled(Text).attrs({
  type: TypographyStyles.textLink,
})`
  font-size: 20px;
  font-weight: 600;
  color: white;
`

export const SideTextLink = styled(Text).attrs({
  type: TypographyStyles.textLink,
})`
  font-size: 17px;
  color: white;
  font-weight: 500;
`
