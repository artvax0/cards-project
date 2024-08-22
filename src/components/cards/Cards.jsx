import React from 'react'
import CardComponent from './CardComponent';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesModel';

export default function Cards({ cards, handleDelete, handleLike }) {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(ROUTES.EDIT_CARD + "/" + id);
  }

  return (
    <Box display="flex" gap={7} flexWrap="wrap" px={10} pb={3}>
      {cards.map((card) => (
        <CardComponent
          card={card}
          key={card._id}
          handleDel={() => handleDelete(card._id)}
          handleEdit={() => handleEdit(card._id)}
          handleLike={() => handleLike(card._id)}
        />
      ))}
    </Box>
  )
}
