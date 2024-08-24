import React from 'react'
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import PageHeader from '../components/PageHeader';
import { useTheme } from '../providers/CustomThemeProvider';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routesModel';

export default function AboutPage() {
  const { isDark } = useTheme();
  return (
    <Box display='flex' justifyContent='space-between' mx='25px'>
      <Box flexGrow={1} sx={{ color: isDark ? '#EEEEEE' : '#222831' }}>
        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>About Us</Typography>
        <Typography>Welcome to Business Galore, the ultimate platform for discovering and connecting with businesses through their digital business cards. Whether you’re looking for a service provider, a local shop, or a business to collaborate with, our app makes it easier than ever to find the right business and get in touch.</Typography>
        <Typography variant='h4' mt={2} sx={{ fontWeight: 'bold' }}>What We Do</Typography>
        <Typography>At Business Galore, we provide a dynamic space where businesses can showcase themselves through customized business cards. <br />Our platform allows users to browse through a diverse range of business cards, each providing essential information and contact details, making it simple to reach out to the businesses that interest you.</Typography>
        <Typography variant='h4' mt={2} sx={{ fontWeight: 'bold' }}>Why Choose Us?</Typography>
        <Typography component='div'>
          <List>
            <ListItem sx={{ fontWeight: 'bold' }}>Connect with Businesses: &nbsp;
              <ListItemText>
                Easily explore business cards from various industries and locations. Our user-friendly interface ensures you can find the right business quickly and effortlessly.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ fontWeight: 'bold' }}>Save Your Favorites: &nbsp;
              <ListItemText>
                Found a business card that caught your eye? Sign up and log in to like the cards that interest you. Your liked cards are stored in your "Favourites" page, allowing you to keep track of potential contacts or services you want to revisit.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ fontWeight: 'bold' }}>Create and Manage Your Business Cards: &nbsp;
              <ListItemText>
                If you’re a business owner, our platform allows you to create a professional digital business card that showcases your brand and services. With a business account, you can easily manage your cards—create new ones, edit existing ones, and delete those that are no longer relevant.
              </ListItemText>
            </ListItem>
          </List>
        </Typography>
        <Typography variant='h4' mt={2} sx={{ fontWeight: 'bold' }}>How It Works</Typography>
        <Typography component='div'>
          <List>
            <ListItem sx={{ fontWeight: 'bold' }}>Browse Business Cards: &nbsp;
              <ListItemText>
                Explore our collection of business cards without needing to sign up. View detailed information and get in touch with businesses that interest you.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ fontWeight: 'bold' }}>Like and Save: &nbsp;
              <ListItemText>
                If you want to keep track of specific businesses, simply sign up and log in to like their cards. All your liked cards will be saved in your "Favourites" page for easy access.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ fontWeight: 'bold' }}>Business Accounts: &nbsp;
              <ListItemText>
                As a business user, create a personalized business card that represents your brand. You’ll also have access to a dashboard where you can view all the cards you’ve created, and make updates or remove them as needed.
              </ListItemText>
            </ListItem>
          </List>
        </Typography>
        <Typography variant='h4' mt={2} sx={{ fontWeight: 'bold' }}>Our Mission</Typography>
        <Typography>
          Our mission is to bridge the gap between businesses and potential clients by providing an easy-to-use platform for discovering and connecting with businesses. We believe that every business deserves a chance to be discovered, and our application is designed to help both businesses and consumers achieve that.
        </Typography>
        <Typography variant='h4' mt={2} sx={{ fontWeight: 'bold' }}>Get Started</Typography>
        <Typography>
          Ready to discover new businesses or showcase your own? <Link to={ROUTES.SIGNUP}>Sign up</Link> today and start exploring the possibilities with Business Galore.
        </Typography>
      </Box>
      <Box>
        <Box component='img' src={"/cardImage.png"} alt="A business card example" />
      </Box>
    </Box>
  )
}
