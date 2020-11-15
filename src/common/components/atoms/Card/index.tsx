import React from 'react'
import styled from 'styled-components'
import MuiCard from '@material-ui/core/Card'

export const Card = styled((props) => <MuiCard {...props} />)`
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.borderSeparator};
`
