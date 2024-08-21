import React from 'react'
import { Box, CardContent, Link, Typography } from '@mui/material'

export default function CardBody({ phone, street, houseNumber, city, bizNumber, email, web }) {
    return (
    <>
            <CardContent>
                <Box component="div" display="flex" className="phoneNumber" sx={{ mt:1 }}>
                    <Typography variant="body1" paragraph sx={{ fontWeight:'bold' }}>Phone:&nbsp;</Typography>
                    <Typography variant="body1" paragraph>{phone}</Typography>
                </Box>
                <Box component="div" display="flex" className="address">
                    <Typography variant="body1" paragraph sx={{ fontWeight:'bold' }}>Address:&nbsp;</Typography>
                    <Typography variant="body1" paragraph>{street} {houseNumber}, {city}</Typography>
                </Box>
                <Box component="div" display="flex" className="cardNumber">
                    <Typography variant="body1" paragraph sx={{ fontWeight:'bold' }}>Card Number:&nbsp;</Typography>
                    <Typography variant="body1" paragraph>{bizNumber}</Typography>
                </Box>
                <Box component="div" display="flex" className="email">
                    <Typography variant="body1" paragraph sx={{ fontWeight:'bold' }}>Email:&nbsp;</Typography>
                    <Typography variant="body1" paragraph>{email}</Typography>
                </Box>
                <Link href='#' underline='hover' variant="body2">{web}</Link>
            </CardContent>
        </>
    )
}
