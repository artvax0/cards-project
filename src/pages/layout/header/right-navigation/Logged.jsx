import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import useUsers from '../../../../hooks/useUsers';
import { useCurrentUser } from '../../../../providers/UserProvider';
import { ROUTES } from '../../../../routes/routesModel';
import { useNavigate } from 'react-router-dom';

export default function Logged() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('public/avatar.png');
    const [avatarAlt, setAvatarAlt] = useState('avatar');
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { handleLogout, handleGetUser } = useUsers();
    const navigate = useNavigate();
    const { user } = useCurrentUser();

    useEffect(() => {
        const userInfo = async () => {
            try {
                const data = await handleGetUser(user._id);
                setAvatarUrl(data.image.url || 'public/avatar.png');
                setAvatarAlt(data.image.alt || 'avatar');
            } catch (error) {
                // if all else failed, default the info.
                console.error('Failed to load user avatar');
                setAvatarUrl('public/avatar.png');
                setAvatarAlt('avatar');
            }
        }
        userInfo();
    }, [user])

    return (
        <>
            <Tooltip title='Account Settings'>
                <IconButton
                    sx={{ p: 0, display: 'inline-flex', ml: 2 }}
                    id='profile-button'
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Avatar src={avatarUrl} alt={avatarAlt} />
                </IconButton>
            </Tooltip>
            <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                disableScrollLock={true}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => navigate(ROUTES.PROFILE)}><AccountBoxIcon /> &nbsp; Profile</MenuItem>
                <MenuItem onClick={handleLogout}><LogoutIcon /> &nbsp; Logout</MenuItem>
            </Menu>
        </>
    )
}
