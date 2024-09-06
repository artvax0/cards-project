import React from 'react'
import { Typography } from '@mui/material'
import { ROUTES } from '../../../../routes/routesModel';
import { useTheme } from '../../../../providers/CustomThemeProvider';
import NavBarLink from '../../../../components/routes/NavBarLink';

export default function Logo() {
  const { isDark } = useTheme();
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <Typography fontFamily='fantasy' variant='h4' sx={{ color: isDark ? '#EEEEEE' : '#222831' }}>Business Galore</Typography>
    </NavBarLink>
  )
}
