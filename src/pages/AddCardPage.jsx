import React from 'react'
import { Navigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import CardForm from '../components/forms/CardForm';
import { ROUTES } from '../routes/routesModel';
import { useCurrentUser } from '../providers/UserProvider';
import useForm from '../hooks/useForm';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';
import useCards from '../hooks/useCards';
import CardComponent from '../components/cards/CardComponent';
import normalizeCard from '../helpers/normalization/normalizeCard';

export default function AddCardPage() {
    const { user } = useCurrentUser();
    const { handleNewCard } = useCards();

    const { data, errors, handleChange, handleReset, validateForm, onSubmit } = useForm(initialCardForm, cardSchema, handleNewCard);
    if (user && !user.isBusiness) return <Navigate to={ROUTES.ROOT} replace />
    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: 'column', md: 'row' }
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
            {data && (
                <Grid xs={12} width='50%' pb={3}>
                    <CardComponent
                        card={{ ...normalizeCard(data), _id: '', likes: [], }}
                        handleDelete={() => { }}
                        handleEdit={() => { }}
                        handleLike={() => { }}
                    />
                </Grid>
            )}
        </Container>
    )
}
