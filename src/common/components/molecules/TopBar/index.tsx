import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Box, Grid } from '@material-ui/core'

import { Text } from 'common/components/atoms/Typography'

import { MainTextLink, SideTextLink } from './styled'
import img from './movieLogo.jpg'

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

const TopBar: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img
            style={{ height: 35, width: 50, marginRight: 7 }}
            src={img}
            alt="logo"
          />
          <Box style={{ width: 300 }}>
            <MainTextLink href="/">Video Alligator</MainTextLink>
          </Box>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <SideTextLink href="/about">About This Tool</SideTextLink>
            <Box p={2}>
              <Text>|</Text>
            </Box>
            <SideTextLink href="/contact-us">Contact Us</SideTextLink>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
