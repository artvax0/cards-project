import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function AboutChooseUs() {
  return (
    <Box sx={{ height: { md: '500px' }, py: 3 }}>
      <Grid display='flex' justifyContent='space-around' container height={{ md: '500px' }} py={5} px={30} spacing={2}>
        <Grid item container md={8} alignContent='center' justifyContent='center' gap={1}>
          <Typography variant='h3' component='h2' sx={{ fontWeight: '500' }}>Why Choose Us?</Typography>
          <Typography component='div'>
            <List>
              <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' component='h3' sx={{ fontWeight: '400', pb: 1 }}>Connect with Businesses</Typography>
                <ListItemText>
                  Easily explore business cards from various industries and locations. Our user-friendly interface ensures you can find the right business quickly and effortlessly.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' component='h3' sx={{ fontWeight: '400', pb: 1 }}>Save Your Favorites</Typography>
                <ListItemText>
                  Found a business card that caught your eye? Sign up and log in to like the cards that interest you. Your liked cards are stored in your "Favourites" page, allowing you to keep track of potential contacts or services you want to revisit.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' component='h3' sx={{ fontWeight: '400', pb: 1 }}>Create and Manage Your Business Cards</Typography>
                <ListItemText>
                  If you’re a business owner, our platform allows you to create a professional digital business card that showcases your brand and services. With a business account, you can easily manage your cards—create new ones, edit existing ones, and delete those that are no longer relevant.
                </ListItemText>
              </ListItem>

            </List>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
