import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Box, Container, Divider, Link, Paper, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import PageHeader from '../components/PageHeader';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import useCards from '../hooks/useCards';
import { useTheme } from '../providers/CustomThemeProvider';

const favoriteColor = pink[500];


export default function CardsDetailsPage() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById } = useCards();
  const { isDark } = useTheme();
  useEffect(() => {
    getCardById(id);
  }, [id]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  console.log(card);
  return (
    <>
      <PageHeader title="Previewing card" subtitle={id} />
      <Paper sx={{ backgroundColor: isDark ? '#000' : '#EEE', display: 'flex', gap: 3, mx: 7, borderRadius: 5 }}>
        <Box component='img' src={card.image.url} alt={card.image.alt} sx={{ width: '50%', borderRadius: 5 }} />
        <Box flexGrow={1} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box flexGrow={2}>
            <Typography variant='h3'>{card.title}</Typography>
            <Typography variant='subtitle1' gutterBottom sx={{ fontWeight: 'bold' }}>{card.subtitle}</Typography>
            <Divider variant='middle' />
            <Typography gutterBottom>{card.description}</Typography>
            <Typography gutterBottom>Email: {card.email}</Typography>
            <Typography gutterBottom>Address: {card.address.street} {card.address.houseNumber}, {card.address.city}, {card.address.country}</Typography>
            <Typography>Website: <Link href="#">{card.web}</Link></Typography>
          </Box>
          <Box>
            <Divider variant='middle' />
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ color: favoriteColor, fontWeight: 'bold' }}>{card.likes.length}&nbsp;</Typography>
              <FavoriteIcon sx={{ color: favoriteColor }} />
            </Container>
          </Box>
        </Box>
      </Paper>
    </>
  )
}
