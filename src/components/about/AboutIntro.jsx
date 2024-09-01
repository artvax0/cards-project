import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '../../providers/CustomThemeProvider'

export default function AboutHeader() {
  const { isDark } = useTheme();
  return (
    <Box sx={{ height: { md: '500px' }, backgroundColor: isDark ? '#2A323D' : '#D9F7F7' }}>
      <Grid display='flex' justifyContent='space-around' container height={{ md: '500px' }} py={5} px={30} spacing={2}>
        <Grid item container md={8} alignContent='center' justifyContent='center' gap={1}>
          <Typography variant='h3' component='h2' sx={{ fontWeight: '500' }}>What We Do</Typography>
          <Typography sx={{ fontSize: '1rem' }}>At Business Galore, we provide a dynamic space where businesses can showcase themselves through customized business cards. <br />Our platform allows users to browse through a diverse range of business cards, each providing essential information and contact details, making it simple to reach out to the businesses that interest you.</Typography>
        </Grid>
        <Grid item container alignContent='center' justifyContent='center'>
          <Box
            width='calc(100% / 3)'
            height='150px'
            sx={{ backgroundImage: 'url(/about-card-add.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}
          />
          <Box
            width='calc(100% / 3)'
            height='150px'
            sx={{ backgroundImage: 'url(/about-card-edit.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}
          />
          <Box
            width='calc(100% / 3)'
            height='150px'
            sx={{ backgroundImage: 'url(/about-card-delete.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
