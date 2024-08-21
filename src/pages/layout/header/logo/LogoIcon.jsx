import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import NavBarLink from '../../../../components/routes/NavBarLink'
import { ROUTES } from '../../../../routes/routesModel'

export default function LogoIcon() {
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <IconButton>
        <Avatar src='/companyLogo.png' alt='Business Logo' />
      </IconButton>
    </NavBarLink>
  )
}
