import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(2),
//       marginTop: 50,
//     },
//   },
// }))

interface ButtonListProps {
  buttonProps: { text: string; color: string }[]
}
export const ButtonList1: FC<ButtonListProps> = ({ buttonProps }) => {
  // const classes = useStyles()

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
