import { Card, CardActionArea } from '@mui/material';
import React from 'react'
import CardHeaderComponent from './CardHeaderComponent';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesModel';

export default function CardComponent({ card, handleDel, handleLike, handleEdit }) {
    const navigate = useNavigate();
    return (
        <>
            <Card sx={{ alignSelf: 'stretch', width: '375px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardActionArea onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}>
                    <CardHeaderComponent img={card.image.url} alt={card.image.alt} title={card.title} subtitle={card.subtitle} />
                    <CardBody phone={card.phone} street={card.address.street} houseNumber={card.address.houseNumber} city={card.address.city} bizNumber={card.bizNumber} email={card.email} web={card.web} />
                </CardActionArea>
                <CardActionBar handleDel={handleDel} handleEdit={handleEdit} handleLike={handleLike} likes={card.likes} cardId={card._id} userId={card.user_id} />
            </Card>
        </>
    )
}
