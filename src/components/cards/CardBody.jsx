import React from 'react'
import { Box, CardContent, Link, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

export default function CardBody({ phone, street, houseNumber, city, state, country, zip, email, web }) {
    return (
        <CardContent>
            <Box component="div" display="flex" className="phoneNumber" sx={{ mt: 1 }}>
                <Typography variant="body1" paragraph sx={{ display: 'flex', alignItems: 'center' }}><PhoneIcon /> &nbsp; {phone}</Typography>
            </Box>
            <Box component="div" display="flex" className="email">
                <Typography variant="body1" paragraph sx={{ display: 'flex', alignItems: 'center' }}><EmailIcon /> &nbsp; {email}</Typography>
            </Box>
            <Box component="div" display="flex" className="address">
                <Typography variant="body1" paragraph sx={{ display: 'flex', alignItems: 'center' }}><PlaceIcon /> &nbsp; {street} {houseNumber}, {city}, {state ? state + ', ' : null} {country} {zip ? '| ' + zip : null}</Typography>
            </Box>
            <Link href='#' underline='hover' variant="body2">{web}</Link>
        </CardContent>
    )
}
