import { Box, Button, CardActions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide } from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon, Phone as PhoneIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react'
import { useCurrentUser } from '../../providers/UserProvider';
import { pink } from '@mui/material/colors';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardActionBar({ phone, handleDel, handleLike, handleEdit, likes, cardId, userId }) {
    const { user } = useCurrentUser();
    const likeColor = pink[500];
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (user && likes.includes(user._id)) setIsLiked(true);
    }, [likes]);

    const handleLikeCard = useCallback(async () => {
        await handleLike(cardId);
        setIsLiked((prev) => !prev);
    }, []);

    const [open, setOpen] = useState(false);

    const handleClickOpen = useCallback(() => setOpen(true), []);

    const handleClose = useCallback(() => setOpen(false), []);

    const handleDeleteCard = useCallback(() => {
        handleClose();
        handleDel();
    }, []);

    const canEditOrDelete = useMemo(() => user?.isAdmin || user?._id == userId, [user, userId])

    const call = useCallback(() => {
        window.location.href = `tel:+${phone}`;
    }, [])

    return (
        <>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Box>
                    {
                        /* Detect if user is admin or owner of card - display icon buttons */
                        canEditOrDelete &&
                        <>
                            <IconButton aria-label='delete' onClick={handleClickOpen}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label='edit' onClick={handleEdit}>
                                <EditIcon />
                            </IconButton>
                        </>
                    }
                </Box>
                <Box>
                    <IconButton aria-label='call' onClick={call}>
                        <PhoneIcon />
                    </IconButton>
                    {
                        (user) ?
                            <IconButton aria-label='favourite' onClick={handleLikeCard}>
                                <FavoriteIcon sx={{ color: isLiked ? likeColor : 'inherit' }} />
                            </IconButton> : null
                    }
                </Box>
            </CardActions>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Delete this business card?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete this business card? This action cannot be undone, and all information associated with this card will be permanently removed.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDeleteCard} color='error'>Delete Business Card</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
