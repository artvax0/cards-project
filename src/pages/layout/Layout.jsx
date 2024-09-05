import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import { Box } from '@mui/material'

export default function Layout({ children }) {
  return (
    <Box minHeight='100vh' display='flex' flexDirection='column'>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  )
}
