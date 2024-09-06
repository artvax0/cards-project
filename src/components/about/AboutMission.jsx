import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import NavBarItem from '../routes/NavBarItem'
import { ROUTES } from '../../routes/routesModel'
import { useTheme } from '../../providers/CustomThemeProvider'

export default function AboutMission() {
  const { isDark } = useTheme();
  return (
    <>
      <Grid item xs={12}>
        <Box p={3}>
          <Typography variant='h4' component='h3' fontWeight={500} gutterBottom>
            Our Mission
          </Typography>
          <Typography variant='body1' paragraph>
            Our mission is to bridge the gap between businesses and potential clients by providing an easy-to-use platform for discovering and connecting with businesses. <br />
            We believe that every business deserves a chance to be discovered, and our application is designed to help both businesses and consumers achieve that.
          </Typography>
          <Typography variant='h4' component='h3' fontWeight={500} gutterBottom>
            Get Started
          </Typography>
          <Typography variant='body1' paragraph>
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
        </Box>
      </Grid>
    </>
  )
}
