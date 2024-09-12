import React, { useCallback } from 'react'
import CardComponent from './CardComponent';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesModel';

export default function Cards({ cards, handleDelete, handleLike }) {
  const navigate = useNavigate();
  const handleEdit = useCallback((id) => navigate(ROUTES.EDIT_CARD + "/" + id), []);

  return (
    <Grid container spacing={4} display="flex" flexWrap="wrap" px={10} pb={3}>
      {cards.map((card) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3} display='inline-flex' flexGrow={1}>
          <CardComponent
            card={card}
            handleDel={() => handleDelete(card._id, card.bizNumber)}
            handleEdit={() => handleEdit(card._id)}
            handleLike={() => handleLike(card._id)}
          />
        </Grid>
      ))}
    </Grid>
  )
}
