import React from 'react'
import PageHeader from '../components/PageHeader'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes/routesModel';
import { useTheme } from '../providers/CustomThemeProvider';

export default function ErrorPage() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Box display='flex' justifyContent='center' alignItems='center' px={20} minHeight='inherit'>
        <Paper elevation={10} sx={{ backgroundColor: isDark ? '#222831' : '#EEEEEE', flexGrow: '1', display: 'flex', p: 4, borderRadius: 5, gap: 5 }}>
          <Box className='icon' flex={1} sx={{ aspectRatio: '1/1', backgroundColor: '#fff', borderRadius: 5, backgroundImage: 'url(public/not-found.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }} />
          <Box className='info' flex={2}>
            <Typography variant='h3' gutterBottom fontWeight='bold'>Oops! We ran out of business cards.</Typography>
            <Divider variant='middle' />
            <Typography variant='h4' mt={2}>The page you were for does not exist!</Typography>
            <Typography variant='h4' mt={2}>You may have entered the wrong page address, or the page has moved.</Typography>
            <Box display='flex' justifyContent='center'>
              <Button onClick={navigate(ROUTES.ROOT)}>Return Home</Button>
            </Box>

          </Box>
        </Paper>
      </Box >
      {/* <Box display='flex' justifyContent='space-between'>
        <Box flexGrow='1'>
          <Button onClick={() => navigate(ROUTES.ROOT)}>Return to Home Page</Button>
        </Box>
        <Box
          component='img'
          src='public/error404.png'
          alt='Error 404, Page Not Found'
        >
        </Box>
      </Box> */}
    </>
  )
}
