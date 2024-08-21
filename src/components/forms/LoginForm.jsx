import React from 'react'
import Form from '../../forms/components/Form'
import Input from '../../forms/components/Input'
import { ROUTES } from '../../routes/routesModel'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function LoginForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    data,
    onInputChange,
}) {
    return (
        <Form
            onSubmit={onSubmit}
            onReset={onReset}
            validateForm={validateForm}
            title={title}
            styles={{ maxWidth: '800px' }}
        >
            <Input
                name="email"
                label="email address"
                error={errors.email}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="password"
                label="password"
                error={errors.password}
                type='password'
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    component={Link}
                    to={ROUTES.SIGNUP}
                    startIcon={<AccountBoxIcon />}
                    sx={{ width: "100%" }}
                >
                    Sign Up
                </Button>
            </Grid>
        </Form>
    )
}
