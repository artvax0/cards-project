import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Box, Container, Divider, Grid, Link, Paper, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import PageHeader from '../components/PageHeader';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import useCards from '../hooks/useCards';
import { useTheme } from '../providers/CustomThemeProvider';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
    <Grid sx={{ pt: 15 }}>
      <Paper sx={{ backgroundColor: isDark ? '#171717' : '#FFF', display: 'flex', gap: 3, mx: 7, borderRadius: 5, maxHeight: '600px' }}>
        <Box component='img' src={card.image.url} alt={card.image.alt} sx={{ width: '50%', borderRadius: 5 }} />
        <Box flexGrow={1} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box flexGrow={2} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant='h3' sx={{ pt: 3 }}>{card.title}</Typography>
            <Typography variant='subtitle1' gutterBottom sx={{ fontWeight: 'bold' }}>{card.subtitle}</Typography>
            <Divider variant='middle' />
            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>Business Description:</Typography>
            <Typography gutterBottom>{card.description}</Typography>
            <Divider variant='middle' />
            <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center' }} ><EmailIcon /> &nbsp; {card.email}</Typography>
            <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center' }}><PhoneIcon /> &nbsp; {card.phone}</Typography>

            <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center' }}><PlaceIcon /> &nbsp; {card.address.street} {card.address.houseNumber}, {card.address.city}, {card.address.country}</Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}><OpenInNewIcon /> &nbsp; <Link href="#">{card.web}</Link></Typography>
          </Box>
          <Box>
            <Divider variant='middle' />
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ color: favoriteColor, fontWeight: 'bold' }}>This business has been liked by {card.likes.length} users&nbsp;</Typography>
              <FavoriteIcon sx={{ color: favoriteColor }} />
            </Container>
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}
