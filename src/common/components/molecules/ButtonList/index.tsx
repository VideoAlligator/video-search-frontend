import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

interface ButtonListProps {
  buttonProps: { text: string; color: string }[]
}
export const ButtonList: FC<ButtonListProps> = ({ buttonProps }) => {
  return (
    <>
      {buttonProps.map((buttonProp) => (
        <Button
          variant="contained"
          style={{
            backgroundColor: buttonProp.color,
            marginTop: 30,
            marginLeft: 20,
          }}
        >
          {buttonProp.text}
        </Button>
      ))}
    </>
  )
}
