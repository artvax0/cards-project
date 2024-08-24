import { Box, Button, CardActions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide } from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon, Phone as PhoneIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import React, { forwardRef, useState } from 'react'
import { useCurrentUser } from '../../providers/UserProvider';
import { pink } from '@mui/material/colors';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardActionBar({ handleDel, handleLike, handleEdit, likes, cardId, userId }) {
    const { user } = useCurrentUser();
    const likeColor = pink[500];
    const [isLiked, setIsLiked] = useState(() => {
        if (user) likes.includes(user._id)
    });

    const handleLikeCard = async () => {
        await handleLike(cardId);
        setIsLiked((prev) => !prev);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteCard = () => {
        handleClose();
        handleDel();
    };

    return (
        <>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Box>
                    {/* Detect if user is admin or owner if card - display delete icon */}
                    {(user && user.isAdmin) || (user && user._id == userId) ? (<IconButton aria-label='delete' onClick={handleClickOpen}>
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
