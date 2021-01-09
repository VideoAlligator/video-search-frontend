import React, { FC } from 'react'
import Button from '@material-ui/core/Button'

interface ButtonListProps {
  buttonProps: { text: string; color: string }[]
}

export const ButtonList: FC<ButtonListProps> = ({ buttonProps }) => {
  return (
    <>
      {buttonProps.map((buttonProp, index) => (
        <Button
          key={index}
          variant="contained"
          style={{
            backgroundColor: buttonProp.color,
            marginLeft: 20,
          }}
        >
          {buttonProp.text}
        </Button>
      ))}
    </>
  )
}
