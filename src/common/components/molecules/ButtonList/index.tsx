import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
export const ButtonList: FC<ButtonListProps> = ({ buttonProps }) => {
  // const classes = useStyles()

  return (
    <>
      {buttonProps.forEach((buttonProp) => (
        <Button
          variant="contained"
          // style={{ backgroundColor: buttonProp.color }}
        >
          {buttonProp.text}
        </Button>
      ))}
    </>
  )
}
