import { Box, IconButton } from '@mui/material'
import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logged from './Logged';
import NotLogged from './NotLogged';
import { useTheme } from '../../../../providers/CustomThemeProvider';
import { useCurrentUser } from '../../../../providers/UserProvider';
import SearchBar from './SearchBar';

export default function RightNavBar() {
    const { isDark, toggleDarkMode } = useTheme();
    const { user } = useCurrentUser();
    return (
        <Box display='inline-flex'>
            <SearchBar />
            <Box sx={{ display: { xs: 'none', md: 'inline-flex' }, alignItems: 'center' }}>
                <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                {user ? <Logged /> : <NotLogged />}
            </Box>
        </Box>
    )
}
