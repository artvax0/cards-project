import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function AboutHowItWorks() {
  return (
    <>
      <Grid item xs={12}>
        <Box p={3}>
          <Typography variant='h4' component='h3' fontWeight={500} gutterBottom>
            How It Works
          </Typography>
          <List>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h5' component='h4' textAlign='center'>
                Browse Business Cards
              </Typography>
              <ListItemText>
                Explore our collection of business cards without needing to sign up. View detailed information and get in touch with businesses that interest you.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h5' component='h4' textAlign='center'>
                Like and Save
              </Typography>
              <ListItemText>
                If you want to keep track of specific businesses, simply sign up and log in to like their cards. All your liked cards will be saved in your <strong>"Favourites"</strong> page for easy access.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h5' component='h4' textAlign='center'>
                Business Accounts
              </Typography>
              <ListItemText>
                As a business user, create a personalized business card that represents your brand. You’ll also have access to a dashboard where you can view all the cards you’ve created, and make updates or remove them as needed.
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </>
  )
}
