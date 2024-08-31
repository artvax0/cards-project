import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../providers/UserProvider'
import { Navigate, useParams } from 'react-router-dom'
import { ROUTES } from '../routes/routesModel'
import useCards from '../hooks/useCards'
import Spinner from '../components/Spinner'
import Error from '../components/Error'
import useForm from '../hooks/useForm'
import cardSchema from '../models/cardSchema'
import initialCardForm from '../helpers/initialForms/initialCardForm'
import CardForm from '../components/forms/CardForm'
import mapCardToModel from '../helpers/normalization/mapCardToModel'
import CardComponent from '../components/cards/CardComponent'
import normalizeCard from '../helpers/normalization/normalizeCard'

export default function EditCardPage() {
  const { card, error, isLoading, getCardById, handleEditCard } = useCards();
  const { user } = useCurrentUser();
  const { id } = useParams();
  const { data, errors, setData, handleChange, handleReset, validateForm, onSubmit } = useForm(initialCardForm, cardSchema, () => { handleEditCard(card._id, data) });

  useEffect(() => {
    // gets card by id, and also activates snackbar (snackType, snackMsg)
    async function getCard() {
      const updateCard = await getCardById(id, 'info', 'Editing Card');
      // autofills form with card data after un-normalizing it
      setData(mapCardToModel(updateCard));
    }
    getCard();
  }, [id, setData]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  if (!card || user._id !== card.user_id) return <Navigate to={ROUTES.ROOT} replace />

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
        title='Edit Card'
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
      {data && (<CardComponent
        card={{ ...card, ...normalizeCard(data), _id: id }}
        handleDelete={() => { }}
        handleEdit={() => { }}
        handleLike={() => { }}
      />)}
    </Container >
  )
}
