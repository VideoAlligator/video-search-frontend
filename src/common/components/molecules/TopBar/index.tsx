import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { StyledTextLink } from './styled'
import img from 'common/components/molecules/TopBar/movieLogo.jpg'
import { Box, Grid, Typography } from '@material-ui/core'

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
            <StyledTextLink href="/">Video Search Tool</StyledTextLink>
          </Box>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Box m={1}>
              <StyledTextLink href="/aboutus">
                <Typography variant="h5">About This Tool</Typography>
              </StyledTextLink>
            </Box>
            <Typography variant="h5">|</Typography>
            <Box m={1}>
              <StyledTextLink href="/contactus">
                <Typography variant="h5">Contact Us</Typography>
              </StyledTextLink>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
