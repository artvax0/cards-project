import { Box, IconButton } from '@mui/material'
import React, { useCallback, useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logged from './Logged';
import NotLogged from './NotLogged';
import { useTheme } from '../../../../providers/CustomThemeProvider';
import { useCurrentUser } from '../../../../providers/UserProvider';
import SearchBar from './SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from './MenuDrawer';

export default function RightNavBar() {
    const { isDark, toggleDarkMode } = useTheme();
    const { user } = useCurrentUser();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box display='inline-flex'>
            <SearchBar />
            <IconButton sx={{ display: { xs: 'inline-flex', md: 'none' } }} onClick={() => setIsOpen(prev => !prev)}><MenuIcon /></IconButton>
            <Box sx={{ display: { xs: 'none', md: 'inline-flex' }, alignItems: 'center' }}>
                <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                {user ? <Logged /> : <NotLogged />}
            </Box>
            <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
    )
}
