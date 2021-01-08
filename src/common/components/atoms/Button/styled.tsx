import React from 'react'
import styled from 'styled-components'
import MaterialButton from '@material-ui/core/Button'

interface StyledButtonProps {
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'light' | 'tertiary'
  minWidth?: number
}

const isCustomColor = (color: string): boolean => {
  return color === 'light' || color === 'tertiary'
}

export const StyledButton = styled(({ minWidth, color, ...props }) => (
  <MaterialButton {...props} color={isCustomColor(color) ? 'inherit' : color} />
))<StyledButtonProps>`
  && {
    text-transform: none;
    font-weight: 500;
    box-shadow: none;
    font-size: 16px;
    min-width: ${({ minWidth }) =>
      minWidth === undefined ? 'auto' : `${minWidth}px`};
    ${({ color, theme }) => {
      if (color === 'light') {
        return 'color: white; border-color: white;'
      } else if (color === 'tertiary') {
        return `color: ${theme.colors.lightBlue};`
      }
    }}
`
