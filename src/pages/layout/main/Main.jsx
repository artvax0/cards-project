import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '../../../providers/CustomThemeProvider';

export default function Main({ children }) {
  const { isDark } = useTheme();
  return (
    <Box component='main' sx={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '1',
      backgroundColor: isDark ? '#222831' : '#EBFFFF',
      height: '100%'
    }}>
      {children}
    </Box>
  )
}
