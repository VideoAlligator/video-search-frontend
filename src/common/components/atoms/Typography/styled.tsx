import styled from 'styled-components'

export const LabelText = styled.label`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
  min-width: 110px;
`

export const TextLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamily};
  color: black;
  font-size: 16px;
  text-decoration: none;
  margin: 0;
  :hover {
    cursor: pointer;
  }
`
