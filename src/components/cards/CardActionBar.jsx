import { Box, CardActions, IconButton } from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon, Phone as PhoneIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import React from 'react'
import { useCurrentUser } from '../../providers/UserProvider';

export default function CardActionBar({ handleDel, handleLike, handleEdit, cardId, userId }) {
    const { user } = useCurrentUser();

    return (
        <>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Box>
                    {/* Detect if user is admin or owner if card - display delete icon */}
                    {(user && user.isAdmin) || (user && user._id == userId) ? (<IconButton aria-label='delete' onClick={handleDel}>
                        <DeleteIcon />
                    </IconButton>) : null}
                    {/* Detect if user is admin or owner if card - display edit icon */}
                    {(user && user.isAdmin) || (user && user._id == userId) ? (<IconButton aria-label='edit' onClick={handleEdit}>
                        <EditIcon />
                    </IconButton>) : null}
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
