import { Box } from '@mui/material'
import React from 'react'
import EditProfileForm from './forms/EditProfileForm'

export default function EditProfile({ sx, setOpenSettings, data, errors, handleChange, validateForm, onSubmit }) {
  return (
    <Box sx={sx} width='100%'>
      <EditProfileForm setOpenSettings={setOpenSettings} data={data} errors={errors} onInputChange={handleChange} validateForm={validateForm} onSubmit={onSubmit} />
    </Box>
  )
}
