import { Avatar, Box, Container, FormControl, Grid, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../providers/CustomThemeProvider";

export default function UserProfile({ title, styles = {}, userData }) {
  const { isDark } = useTheme();
  return (
    <Container
      color="inherit"
      sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
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
      <Grid container spacing={1} my={2} direction='row' width='100'>
        <Grid item xs={12} md={8} container spacing={2}>
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
            <TextField label='State' InputProps={{ readOnly: true }} fullWidth defaultValue={userData.address.state} />
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
        <Grid item container xs={12} md={4}>
          <Box width='100%'>
            <Avatar alt={userData.image.alt} src={userData.image.url} sx={{ width: '100%', height: '100%' }} />
          </Box>
        </Grid>
      </Grid>
    </Container >
  );
}
