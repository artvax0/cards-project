import { Avatar, IconButton, Tooltip } from '@mui/material'
import React from 'react'

export default function Logged() {
    return (
        <Tooltip title='Open Settings'>
            <IconButton sx={{ p: 0, display: 'inline-flex', ml: 2 }}>
                <Avatar src='public/avatar.png' alt='avatar' />
            </IconButton>
        </Tooltip>
    )
}
