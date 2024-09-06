import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function AboutChooseUs() {
  return (
    <>
      <Grid item xs={12}>
        <Box p={3}>
          <Typography variant='h4' component='h3' fontWeight={500} gutterBottom>
            Why Choose Us?
          </Typography>
          <List>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h5' component='h4' textAlign='center'>
                Connect with Businesses
              </Typography>
              <ListItemText>
                Easily explore business cards from various industries and locations. Our user-friendly interface ensures you can find the right business quickly and effortlessly.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h5' component='h4' textAlign='center'>
                Save Your Favourites
              </Typography>
              <ListItemText>
                Found a business card that caught your eye? Sign up and log in to like the cards that interest you. Your liked cards are stored in your <strong>"Favourites"</strong> page, allowing you to keep track of potential contacts or services you want to revisit.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h5' component='h4' textAlign='center'>
                Create and Manage Your Business Cards
              </Typography>
              <ListItemText>
                If you’re a business owner, our platform allows you to create a professional digital business card that showcases your brand and services. With a business account, you can easily manage your cards—create new ones, edit existing ones, and delete those that are no longer relevant.
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </>
  )
}
