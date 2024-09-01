import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '../../../providers/CustomThemeProvider';

export default function Main({ children }) {
  const { isDark } = useTheme();
  return (
    <Box sx={{
      minHeight: '85vh',
      backgroundColor: isDark ? '#222831' : '#EBFFFF',
      minHeight: '100vh'
    }}>
      {children}
    </Box>
  )
}
