import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesModel';
import { useCurrentUser } from '../../providers/UserProvider';
import { useTheme } from '../../providers/CustomThemeProvider';

export default function AddNewCardButton() {
    const navigate = useNavigate()
    const { user } = useCurrentUser();
    const { isDark } = useTheme();
    return (
        <>
            {user && user.isBusiness ?
                <Button
                    onClick={() => navigate(ROUTES.NEW_CARD)}
                    variant='contained'
                    sx={{
                        aspectRatio: '1/1', borderRadius: '50%', position: 'fixed', bottom: '75px', right: '17px', fontSize: '1.5rem',
                        backgroundColor: isDark ? '#6527BE' : '#9681EB',
                        '&:hover': { backgroundColor: isDark ? '#52209C' : '#7A60E6' }
                    }}
                >+</Button > : null}
        </>

    )
}
