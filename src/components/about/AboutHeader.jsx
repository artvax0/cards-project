import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ROUTES } from '../../routes/routesModel'
import NavBarItem from '../routes/NavBarItem'
import { useTheme } from '../../providers/CustomThemeProvider'

export default function AboutHeader() {
  const { isDark } = useTheme();
  return (
    <Box sx={{ height: { md: '500px' } }}>
      <Grid display='flex' justifyContent='space-around' container height={{ md: '500px' }} py={5} px={30} spacing={2}>
        <Grid item container md={6} alignContent='center' gap={1}>
          <Typography variant='h5' component='h1' sx={{ fontWeight: '100' }}>About Us</Typography>
          <Typography variant='h4' component='h2' sx={{ fontWeight: 'bold' }}>Empowering Businesses to Shine with Custom Advertisement Cards.</Typography>
          <Typography sx={{ fontSize: '1rem' }}>Welcome to Business Galore, the ultimate platform for discovering and connecting with businesses through their digital business cards. Whether you’re looking for a service provider, a local shop, or a business to collaborate with, our app makes it easier than ever to find the right business and get in touch.</Typography>
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
        </Grid>
        <Grid item container md={6}>
          <Box
            width='100%'
            sx={{ backgroundImage: 'url(/about-header-introduction.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'right' }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
