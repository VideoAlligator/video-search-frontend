import React, { FC, useState } from 'react'
import Box from '@material-ui/core/Box'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import { ScreenContainer } from 'common/components/templates/ScreenContainer'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import img from './assets/contact.jpg'

const ContactPage: FC = () => {
  const [expandEmail, setExpandEmail] = useState(false)
  const [expandAddress, setExpandAddress] = useState(false)

  return (
    <ScreenContainer center maxWidth={1100}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Box mt={5}>
          <Text type={TypographyStyles.primaryHeadline}>Contact Us</Text>
        </Box>
        <Box mt={3}>
          <Text type={TypographyStyles.bodyCopyLarge}>
            Have any questions? We'd love to hear from you and we will be in
            touch within one business day!
          </Text>
        </Box>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img height={600} width={600} src={img} alt="Contact Us" />
        <Box ml={8}>
          <Box width={280}>
            <ListItem
              key="email"
              button
              onClick={() => setExpandEmail(!expandEmail)}
            >
              <ListItemIcon>
                <EmailIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Email" />
              {expandEmail ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expandEmail} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem>
                  <ListItemText>
                    <Text>info.video.alligator@gmail.com</Text>
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>
            <Box m={2} />
            <ListItem
              key="address"
              button
              onClick={() => setExpandAddress(!expandAddress)}
            >
              <ListItemIcon>
                <LocationOnIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Address" />
              {expandAddress ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expandAddress} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem>
                  <ListItemText>
                    <Text>
                      The Edward S. Rogers Sr. Department of Electrical &
                      Computer Engineering
                    </Text>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Text>10 King’s College Road</Text>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Text>Toronto, Ontario • M5S 3G4 • Canada</Text>
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
