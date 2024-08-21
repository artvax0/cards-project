import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import LeftNavBar from './left-navigation/LeftNavBar'
import RightNavBar from './right-navigation/RightNavBar'
import { useTheme } from '../../../providers/CustomThemeProvider';

export default function Header() {
  const { isDark } = useTheme();
  return (
    <AppBar position='sticky' color='primary' elevation={10} sx={{ backgroundColor: isDark ? '#0F4C75' : '#3282B8' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <LeftNavBar />
        <RightNavBar />
      </Toolbar>
    </AppBar>
  )
}
