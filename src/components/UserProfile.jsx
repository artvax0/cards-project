import { Avatar, Box, Container, FormControl, Grid, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../providers/CustomThemeProvider";

export default function UserProfile({ title, styles = {}, data }) {
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
        <Grid item xs={12} sm={8} container>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='First Name' InputProps={{ readOnly: true }} fullWidth>
              {data.name.first}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Middle Name' InputProps={{ readOnly: true }} fullWidth>
              {data.name.middle}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Last Name' InputProps={{ readOnly: true }} fullWidth>
              {data.name.last}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Phone' InputProps={{ readOnly: true }} fullWidth>
              {data.phone}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Email' InputProps={{ readOnly: true }} fullWidth>
              {data.email}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Country' InputProps={{ readOnly: true }} fullWidth>
              {data.address.country}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='State' InputProps={{ readOnly: true }} fullWidth>
              {data.address.state}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='City' InputProps={{ readOnly: true }} fullWidth>
              {data.address.city}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Street' InputProps={{ readOnly: true }} fullWidth>
              {data.address.street}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='House Number' InputProps={{ readOnly: true }} fullWidth>
              {data.address.houseNumber}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label='Zip' InputProps={{ readOnly: true }} fullWidth>
              {data.address.zip}
            </TextField>
          </Grid>
          <Box>
            <Avatar alt={data.image.alt} src={data.image.url} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
