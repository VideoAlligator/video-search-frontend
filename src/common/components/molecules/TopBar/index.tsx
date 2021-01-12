import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button } from 'common/components/atoms/Button'
import styled from 'styled-components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

export const TextLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  margin: 0;
  :hover {
    cursor: pointer;
  }
`
const TopBar: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <TextLink href="/" style={{ color: '#ffffff' }}>
            <Typography variant="h6" className={classes.title}>
              Video Search Tool
            </Typography>
          </TextLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
