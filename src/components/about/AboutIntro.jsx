import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '../../providers/CustomThemeProvider';

export default function AboutIntro() {
  const { isDark } = useTheme();
  return (
    <>
      <Grid item xs={12}>
        <Box p={3}>
          <Typography variant='h4' component='h3' fontWeight={500} gutterBottom>
            What We Do
          </Typography>
          <Typography variant='body1' paragraph>
            At Business Galore, we provide a dynamic space where businesses can showcase themselves through customized business cards. <br />
            Our platform allows users to browse through a diverse range of business cards, each providing essential information and contact details, making it simple to reach out to the businesses that interest you.
          </Typography>
          <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' }
          }}>
            <Grid item xs={12} sm={4} sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img
                src={'/about-card-add.png'}
                alt='Add Card Promotion'
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img
                src={'/about-card-edit.png'}
                alt='Edit Card Promotion'
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img
                src={'/about-card-delete.png'}
                alt='Delete Card Promotion'
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  )
}
