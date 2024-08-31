import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";

const EditForm = ({
  setOpenSettings,
  onSubmit,
  validateForm,
  color = "inherit",
  spacing = 1,
  styles = {},
  children,
}) => {
  const handleCloseForm = () => {
    setOpenSettings(prev => !prev);
  }
  return (
    <Box
      component="form"
      color={color}
      sx={{ p: { xs: 1, sm: 2 }, ...styles }}
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate
    >
      <Grid container spacing={spacing}>
        {children}
      </Grid>

      <Grid container spacing={1} my={2} direction="row" width="100">
        <Grid item xs={6}>
          <FormButton
            node="cancel"
            color="error"
            component="div"
            variant="outlined"
            onClick={handleCloseForm}
          />
        </Grid>
        <Grid item xs={6}>
          <FormButton
            node="Submit"
            color='success'
            onClick={onSubmit}
            disabled={!validateForm()}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditForm;
