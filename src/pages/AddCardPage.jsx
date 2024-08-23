import React from 'react'
import { Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import CardForm from '../components/forms/CardForm';
import { ROUTES } from '../routes/routesModel';
import { useCurrentUser } from '../providers/UserProvider';
import useForm from '../hooks/useForm';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';
import useCards from '../hooks/useCards';

export default function AddCardPage() {
    // send viewer home if not logged in
    const { user } = useCurrentUser();
    const { handleNewCard } = useCards();
    if (!user.isBusiness || !user.isAdmin) return <Navigate to={ROUTES.ROOT} replace />

    const { data, errors, handleChange, handleReset, validateForm, onSubmit } = useForm(initialCardForm, cardSchema, handleNewCard);
    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CardForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title='Add new card'
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </Container>
    )
}
