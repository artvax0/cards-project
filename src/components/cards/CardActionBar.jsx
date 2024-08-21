import { Box, CardActions, IconButton } from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon, Phone as PhoneIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import React from 'react'
import { useCurrentUser } from '../../providers/UserProvider';

export default function CardActionBar({ handleDel, handleLike, handleEdit }) {
    const user = useCurrentUser();

    return (
        <>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <IconButton aria-label='delete' onClick={handleDel}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label='edit' onClick={handleEdit}>
                        <EditIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton aria-label='call'>
                        <PhoneIcon />
                    </IconButton>
                    <IconButton aria-label='favourite' onClick={handleLike}>
                        <FavoriteIcon />
                    </IconButton>
                </Box>
            </CardActions>
        </>
    )
}
