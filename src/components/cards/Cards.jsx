import React from 'react'
import CardComponent from './CardComponent';
import { Box } from '@mui/material';

export default function Cards({ cards, handleDelete, handleLike }) {
  const handleEdit = (id) => {
    console.log(`Edit ${id}`);
  }

  return (
    <Box display="flex" gap={3} flexWrap="wrap" justifyContent='space-between' px={10}>
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
