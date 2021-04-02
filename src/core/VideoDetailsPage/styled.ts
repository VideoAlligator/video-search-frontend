import styled from 'styled-components'
import { Text } from 'common/components/atoms/Typography'

export const CloseButton = styled.button.attrs({ type: 'button' })`
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`

export const FrameImg = styled.img`
  max-width: 400px;
  height: auto;
  width: auto;
`

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: bold;
  font-size: 34px;
  margin: 0;
`

export const ModalHeading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  font-size: 22px;
  margin: 0;
`

export const StyledText = styled(Text)`
  color: #4e7298;
`
