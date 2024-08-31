import { Avatar, Box, Button, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../providers/CustomThemeProvider";
import EditProfile from "./EditProfile";
import initialProfileForm from "../helpers/initialForms/initialProfileForm";
import profileSchema from "../models/profileSchema";
import useForm from "../hooks/useForm";
import useUsers from "../hooks/useUsers";
import normalizeProfile from "../helpers/normalization/normalizeProfile";

export default function UserProfile({ userId, title, styles = {}, userData }) {
  const { isDark } = useTheme();
  const [openSettings, setOpenSettings] = useState(false);
  const handleOpenSettings = () => {
    setOpenSettings((prev) => !prev);
  }

  const { handleUpdateUser } = useUsers();
  const updateUser = () => {
    const normalizedData = normalizeProfile(data);
    handleUpdateUser(userId, normalizedData);
    handleOpenSettings();
    handleReset();
  }

  const { data, errors, handleChange, validateForm, onSubmit, handleReset } = useForm(initialProfileForm, profileSchema, updateUser);
  return (
    <Container
      color="inherit"
      sx={{ p: { xs: 1, sm: 2 }, ...styles }}
    >
      <Typography
        align='center'
        variant='h4'
        component='h1'
        mb={2}
        sx={{ color: isDark ? '#EEEEEE' : '#222831' }}
      >
        {title.toUpperCase()}
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} my={2} direction='row' width='100'>
        <Grid item container xs={12} md={4}>
          <Box width='100%' >
            <Avatar alt={userData.image.alt} src={userData.image.url} sx={{ width: '50%', height: 'fit-content', mx: 'auto' }} />
            <Divider sx={{ mt: 2 }} />
            {
              !openSettings ?
                <Button variant='outlined' fullWidth sx={{ mt: 2 }} onClick={handleOpenSettings}>Edit Profile</Button> :
                <EditProfile
                  setOpenSettings={setOpenSettings}
                  onSubmit={onSubmit}
                  validateForm={validateForm}
                  errors={errors}
                  data={data}
                  handleChange={handleChange}
                />
            }


          </Box>
        </Grid>
        <Grid item xs={12} md={8} container spacing={2} height='fit-content'>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='First Name' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.name.first} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Middle Name' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.name.middle} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Last Name' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.name.last} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Phone' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.phone} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Email' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.email} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Country' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.address.country} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='State' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.address.state == 'not defined' ? '' : userData.address.state} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='City' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.address.city} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Street' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.address.street} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='House Number' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.address.houseNumber} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Zip' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.address.zip} />
          </Grid>
        </Grid>
      </Grid>
    </Container >
  );
}
