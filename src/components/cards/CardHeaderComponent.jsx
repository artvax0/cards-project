import { CardHeader, CardMedia, Divider } from '@mui/material'
import React from 'react'

export default function CardHeaderComponent({ img, alt, title, subtitle }) {
  return (
    <>
      <CardMedia
        sx={{ height: 140 }}
        image={img || 'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg'}
        title={alt || 'business card'}
      />
      <CardHeader title={title} subheader={subtitle} />
      <Divider variant='middle'></Divider>
    </>
  )
}
