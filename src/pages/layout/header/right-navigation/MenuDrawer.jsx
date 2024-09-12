import { Box, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useTheme } from '../../../../providers/CustomThemeProvider';
import { useCurrentUser } from '../../../../providers/UserProvider';
import NavBarLink from '../../../../components/routes/NavBarLink';
import { ROUTES } from '../../../../routes/routesModel';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logged from './Logged';
import NotLogged from './NotLogged';

export default function MenuDrawer({ isOpen, setIsOpen }) {
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useCurrentUser();

  return (
    <Drawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      anchor='right'
    >
      <Box width='250px' display='flex' flexDirection='column' height='100%' my={2}>
        <Box flexGrow={1}>
          <NavBarLink to={ROUTES.ROOT}>
            <ListItemButton onClick={() => setIsOpen(false)} sx={{ color: isDark ? '#EEEEEE' : '#222831' }}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </NavBarLink>
          <NavBarLink to={ROUTES.ABOUT}>
            <ListItemButton onClick={() => setIsOpen(false)} sx={{ color: isDark ? '#EEEEEE' : '#222831' }}>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemButton>
          </NavBarLink>
        </Box>
        <Box display='flex' justifyContent='center'>
          <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          {user ? <Logged /> : <NotLogged />}
        </Box>

      </Box>
    </Drawer>
  )
}
