import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import NavBarItem from '../routes/NavBarItem'
import { ROUTES } from '../../routes/routesModel'
import { useTheme } from '../../providers/CustomThemeProvider'

export default function AboutMission() {
  const { isDark } = useTheme();
  return (
    <Box sx={{ height: { md: '300px' }, py: 3 }}>
      <Grid display='flex' justifyContent='space-around' container height={{ md: '300px' }} px={30} spacing={2}>
        <Grid item container md={8} alignContent='center' justifyContent='center' gap={1}>
          <Typography variant='h3' component='h2' sx={{ fontWeight: '500' }}>Our Mission</Typography>
          <Typography sx={{ fontSize: '1rem' }}>
            Our mission is to bridge the gap between businesses and potential clients by providing an easy-to-use platform for discovering and connecting with businesses. We believe that every business deserves a chance to be discovered, and our application is designed to help both businesses and consumers achieve that.
          </Typography>
          <Typography variant='h3' component='h2' mt={2} sx={{ fontWeight: '500' }}>Get Started</Typography>
          <Typography>
            Ready to discover new businesses or showcase your own? Sign up today and start exploring the possibilities with Business Galore.
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
        </Grid>
      </Grid>
    </Box>
  )
}
