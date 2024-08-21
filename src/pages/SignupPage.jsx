import React from "react";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import { ROUTES } from "../routes/routesModel";
import useUsers from "../hooks/useUsers";
import useForm from "../hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";
import { useCurrentUser } from "../providers/UserProvider";
import SignupForm from "../components/forms/SignupForm";

export default function SignupPage() {
  const { user } = useCurrentUser();
  if (user) return <Navigate to={ROUTES.ROOT} replace />;
  const { isLoading, handleRegister } = useUsers();

  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    handleChangeCheckBox,
  } = useForm(initialSignupForm, signupSchema, handleRegister);

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignupForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"register form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
        handleChangeCheckBox={handleChangeCheckBox}
      />
    </Container>
  );
}
