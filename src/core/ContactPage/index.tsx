import React, { FC, useState } from 'react'
import Box from '@material-ui/core/Box'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
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
import { contactInfo } from './constants'

const ContactPage: FC = () => {
  const [expandEmail, setExpandEmail] = useState(false)
  const [expandPhone, setExpandPhone] = useState(false)

  return (
    <ScreenContainer center maxWidth={1100}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Box mt={5}>
          <Text type={TypographyStyles.sectionHeadline}>Contact Us</Text>
        </Box>
        <Box mt={3}>
          <Text type={TypographyStyles.bodyCopyLarge}>
            Have any questions? We'd love to hear from you and we will be in
            touch within one business day!
          </Text>
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
            <ListItem button onClick={() => setExpandEmail(!expandEmail)}>
              <ListItemIcon>
                <EmailIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Email" />
              {expandEmail ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expandEmail} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText>
                    {contactInfo.map((contactinfo, index) => (
                      <Text key={index}>
                        {contactinfo.email}
                        <Box pb={1} />
                      </Text>
                    ))}
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>
          </Box>
          <Box mt={5}>
            <ListItem button onClick={() => setExpandPhone(!expandPhone)}>
              <ListItemIcon>
                <PhoneIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Phone" />
              {expandPhone ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expandPhone} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText>
                    {contactInfo.map((contactinfo, index) => (
                      <Text key={index}>
                        {contactinfo.phone}
                        <Box pb={1} />
                      </Text>
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
