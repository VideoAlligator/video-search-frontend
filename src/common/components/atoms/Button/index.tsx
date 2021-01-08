import React, { FC } from 'react'

import { StyledButton } from './styled'

interface ButtonProps {
  fullWidth?: boolean
  minWidth?: number
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'light' | 'tertiary'
  disableElevation?: boolean
  disableFocusRipple?: boolean
  disabled?: boolean
  endIcon?: React.ReactNode
  href?: string
  size?: 'small' | 'medium' | 'large'
  startIcon?: React.ReactNode
  variant?: 'text' | 'outlined' | 'contained'
  type?: string
  onClick?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  ...props
}) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  )
}
