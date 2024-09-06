import { Box } from '@mui/material'
import React from 'react'
import Logo from '../logo/Logo'
import LogoIcon from '../logo/LogoIcon'
import NavBarItem from '../../../../components/routes/NavBarItem'
import { ROUTES } from '../../../../routes/routesModel'
import { useTheme } from '../../../../providers/CustomThemeProvider'

export default function LeftNavBar() {
  const { isDark } = useTheme();
  return (
    <Box display='inline-flex' alignItems='center' gap={3}>
      <LogoIcon />
      <Box display={{ xs: 'none', md: 'inline-flex' }} justifyContent='flex-start' alignItems='center' gap={3}>
        <Logo />
        <NavBarItem to={ROUTES.CARDS} label={'Home'} sx={{ color: isDark ? '#EEEEEE' : '#222831', display: { xs: 'none', md: 'inline-flex' } }} />
        <NavBarItem to={ROUTES.ABOUT} label={'About'} sx={{ color: isDark ? '#EEEEEE' : '#222831', display: { xs: 'none', md: 'inline-flex' } }} />
        <NavBarItem to={ROUTES.SANDBOX} label={'Sandbox'} sx={{ color: isDark ? '#EEEEEE' : '#222831', display: { xs: 'none', md: 'inline-flex' } }} />
      </Box>
    </Box>
  )
}
