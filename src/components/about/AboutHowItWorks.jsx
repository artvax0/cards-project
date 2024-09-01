import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '../../providers/CustomThemeProvider';

export default function AboutHowItWorks() {
  const { isDark } = useTheme();
  return (
    <Box sx={{ height: { md: '500px' }, py: 3, backgroundColor: isDark ? '#2A323D' : '#D9F7F7' }}>
      <Grid display='flex' justifyContent='space-around' container height={{ md: '500px' }} py={5} px={30} spacing={2}>
        <Grid item container md={8} alignContent='center' gap={1}>
          <Typography variant='h3' component='h2' sx={{ fontWeight: '500' }}>How It Works</Typography>
          <Typography component='div'>
            <List>
              <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant='h4' component='h3' sx={{ fontWeight: '400', pb: 1 }}>Browse Business Cards</Typography>
                <ListItemText>
                  Explore our collection of business cards without needing to sign up. View detailed information and get in touch with businesses that interest you.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant='h4' component='h3' sx={{ fontWeight: '400', pb: 1 }}>Like and Save</Typography>
                <ListItemText>
                  If you want to keep track of specific businesses, simply sign up and log in to like their cards. All your liked cards will be saved in your "Favourites" page for easy access.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant='h4' component='h3' sx={{ fontWeight: '400', pb: 1 }}>Business Accounts</Typography>
                <ListItemText>
                  As a business user, create a personalized business card that represents your brand. You’ll also have access to a dashboard where you can view all the cards you’ve created, and make updates or remove them as needed.
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid container item md={4}>
          <Box
            width='100%'
            sx={{ backgroundImage: 'url(/cardImage.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'right' }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
