import { BottomNavigation, BottomNavigationAction, Divider, Paper } from '@mui/material'
import React, { useState } from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesModel';

export default function Footer() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <Paper elevation={3} component='footer' sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} width='100%'>
      <Divider />
      <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue) }}>
        <BottomNavigationAction label='About' icon={<InfoIcon />} onClick={() => navigate(ROUTES.ABOUT)} />
        <BottomNavigationAction label='Favourites' icon={<FavoriteIcon />} onClick={() => navigate(ROUTES.FAV_CARDS)} />
        <BottomNavigationAction label='My Cards' icon={<RecentActorsIcon />} onClick={() => navigate(ROUTES.MY_CARDS)} />
      </BottomNavigation>
    </Paper>
  )
}
