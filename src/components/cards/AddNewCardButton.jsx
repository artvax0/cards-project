import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesModel';
import { useCurrentUser } from '../../providers/UserProvider';

export default function AddNewCardButton() {
    const navigate = useNavigate()
    const { user } = useCurrentUser();

    return (
        <>
            {user ? <Button onClick={() => navigate(ROUTES.NEW_CARD)} variant='contained' sx={{ aspectRatio: '1/1', borderRadius: '50%', position: 'fixed', bottom: '75px', right: '17px', fontSize: '1.5rem' }}>+</Button > : null}
        </>

    )
}
