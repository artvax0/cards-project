import { Box } from '@mui/material'
import React from 'react'
import NavBarItem from '../../../../components/routes/NavBarItem';
import { ROUTES } from '../../../../routes/routesModel';
import { useTheme } from '../../../../providers/CustomThemeProvider';

export default function NotLogged() {
    const { isDark } = useTheme();
    return (
        <Box>
            <NavBarItem to={ROUTES.SIGNUP} label='Sign Up' sx={{ color: isDark ? '#EEE' : '#222831' }} />
            <NavBarItem to={ROUTES.LOGIN} label='Login' sx={{ color: isDark ? '#EEE' : '#222831' }} />
        </Box>
    )
}
