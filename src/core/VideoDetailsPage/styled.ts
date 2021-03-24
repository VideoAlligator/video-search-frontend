import styled from 'styled-components'

export const CloseButton = styled.button.attrs({ type: 'button' })`
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`

export const FrameImg = styled.img`
  max-height: 200px;
  max-width: 300px;
  height: auto;
  width: auto;
`

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: bold;
  font-size: 34px;
  margin: 0;
`
