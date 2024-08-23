import { Box, CardActions, IconButton } from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon, Phone as PhoneIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import React, { useState } from 'react'
import { useCurrentUser } from '../../providers/UserProvider';
import { pink } from '@mui/material/colors';

export default function CardActionBar({ handleDel, handleLike, handleEdit, likes, cardId, userId }) {
    const { user } = useCurrentUser();
    const likeColor = pink[500];
    const [isLiked, setIsLiked] = useState(() => likes.includes(user._id));

    const handleLikeCard = async () => {
        await handleLike(cardId);
        setIsLiked((prev) => !prev);
    }

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
                    {(user) ? <IconButton aria-label='favourite' onClick={handleLikeCard}>
                        <FavoriteIcon sx={{ color: isLiked ? likeColor : 'inherit' }} />
                    </IconButton> : null}
                </Box>
            </CardActions>
        </>
    )
}
