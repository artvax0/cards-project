import { CardHeader, CardMedia, Divider } from '@mui/material'
import React from 'react'

export default function CardHeaderComponent({ img, alt, title, subtitle }) {
  return (
    <>
        <CardMedia
            sx={{ height: 140 }}
            image={img}
            title={alt}
            />
            <CardHeader title={title} subheader={subtitle} />
            <Divider variant='middle'></Divider>
    </>
  )
}
