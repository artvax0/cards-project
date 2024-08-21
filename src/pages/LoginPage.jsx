import React from 'react'
import { Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import useUsers from '../hooks/useUsers';
import { ROUTES } from '../routes/routesModel';
import { useCurrentUser } from '../providers/UserProvider';
import useForm from '../hooks/useForm';
import initialLoginForm from '../helpers/initialForms/initialLoginForm';
import loginSchema from '../models/loginSchema';
import LoginForm from '../components/forms/LoginForm';

export default function LoginPage() {
  const { user } = useCurrentUser();
  if (user) return <Navigate to={ROUTES.ROOT} replace />
  const { isLoading, handleLogin } = useUsers();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } = useForm(initialLoginForm, loginSchema, handleLogin);

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title='log in'
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
    </Container>
  )
}
