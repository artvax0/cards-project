import React from 'react'
import { BrowserRouter } from "react-router-dom"
import CustomThemeProvider from "./providers/CustomThemeProvider"
import SnackbarProvider from "./providers/SnackbarProvider"
import UserProvider from "./providers/UserProvider"
import Layout from "./pages/layout/Layout"
import Router from "./routes/Router"
function App() {

  return (
    <>
      <BrowserRouter>
        <CustomThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </CustomThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
