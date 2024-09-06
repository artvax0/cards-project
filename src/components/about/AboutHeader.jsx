import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import NavBarItem from '../routes/NavBarItem'
import { ROUTES } from '../../routes/routesModel'
import { useTheme } from '../../providers/CustomThemeProvider';

export default function AboutHeader() {
  const { isDark } = useTheme();
  return (
    <>
      <Grid item xs={12} md={8}>
        <Box p={3}>
          <Typography variant='h5' component='h1' gutterBottom fontWeight={100}>
            About Us
          </Typography>
          <Typography variant='h4' component='h2' gutterBottom>
            Empowering Businesses to Shine with Custom Advertisement Cards.
          </Typography>
          <Typography variant='body1' paragraph>
            Welcome to Business Galore, the ultimate platform for discovering and connecting with businesses through their digital business cards. Whether you’re looking for a service provider, a local shop, or a business to collaborate with, our app makes it easier than ever to find the right business and get in touch.
          </Typography>
          <NavBarItem
            to={ROUTES.SIGNUP}
            sx={{ color: '#1B7F75' }}
            label='sign up now for free'
            buttonType='contained'
            buttonStyle={{
              backgroundColor: isDark ? '#A7EDE7' : '#90E8E0',
              '&:hover': { backgroundColor: isDark ? '#74E2D8' : '#67DFD4' }
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img
          src={'/about-header-introduction.png'}
          alt='Header Introduction'
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
      </Grid>
    </>
  )
}
