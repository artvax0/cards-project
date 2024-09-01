import React from 'react'
import NavBarLink from './NavBarLink'
import { Button, Typography } from '@mui/material'

export default function NavBarItem({ to, sx, label, buttonType = 'text', buttonStyle = {} }) {
  return (
    <NavBarLink to={to} sx={sx}>
      <Button color='inherit' variant={buttonType} sx={buttonStyle}>
        <Typography>{label}</Typography>
      </Button>
    </NavBarLink>
  )
}
