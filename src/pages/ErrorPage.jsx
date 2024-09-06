import React from 'react'
import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { ROUTES } from '../routes/routesModel';
import { useTheme } from '../providers/CustomThemeProvider';
import NavBarItem from '../components/routes/NavBarItem';

export default function ErrorPage() {
  const { isDark } = useTheme();
  return (
    <>
      <Container maxWidth='md' sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Paper elevation={10} sx={{ backgroundColor: isDark ? '#222831' : '#EEEEEE', p: 3 }}>
          <Grid container alignItems='stretch'>
            <Grid item xs={12} md={4} sx={{ backgroundColor: '#fff', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }} borderRadius={5}>
              <img
                src='/not-found.svg'
                alt='Not Found'
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </Grid>
            <Grid item xs={12} md={8} pl={2}>
              <Typography fontWeight='bold' variant='h5' component='h1' gutterBottom>
                Oops! We ran out of business cards.
              </Typography>
              <Divider variant='middle' />
              <Typography variant='body1' paragraph>
                The page you were for does not exist! <br />
                You may have entered the wrong page address, or the page has moved.
              </Typography>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <NavBarItem
                  to={ROUTES.ROOT}
                  label='return home'
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}
