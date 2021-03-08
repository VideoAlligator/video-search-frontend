import React, { FC, useState } from 'react'
import Box from '@material-ui/core/Box'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import {
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'

import { ScreenContainer } from 'common/components/templates/ScreenContainer'

import img from './assets/contact.jpg'
import { contactInfo } from './constants'

const ContactPage: FC = () => {
  const [openE, setOpenE] = useState(false)
  const [openP, setOpenP] = useState(false)
  const handleClickE = () => {
    setOpenE(!openE)
  }
  const handleClickP = () => {
    setOpenP(!openP)
  }
  return (
    <ScreenContainer center maxWidth={1100}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Box mt={5}>
          <Typography variant="h2"> Contact Us</Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="h3">
            Have any questions? We'd love to hear from you and we will be in
            touch within one business day!
          </Typography>
        </Box>
      </Grid>
      <Box
        display="flex"
        height={350}
        mt={15}
        justifyContent="centre"
        alignItems="center"
      >
        <img height={750} width={750} src={img} alt="Contact Us" />
        <Box ml={8}>
          <Box>
            <ListItem button onClick={handleClickE}>
              <ListItemIcon>
                <EmailIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Email" />
              {openE ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openE} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText>
                    {contactInfo.map((contactinfo, index) => (
                      <Typography variant="h4">
                        {contactinfo.email}
                        <Divider />
                      </Typography>
                    ))}
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>
          </Box>
          <Box mt={5}>
            <ListItem button onClick={handleClickP}>
              <ListItemIcon>
                <PhoneIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Phone" />
              {openP ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openP} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText>
                    {contactInfo.map((contactinfo, index) => (
                      <Typography variant="h4">
                        {contactinfo.phone}
                        <Divider />
                      </Typography>
                    ))}
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>
          </Box>
        </Box>
      </Box>
    </ScreenContainer>
  )
}

export default ContactPage
