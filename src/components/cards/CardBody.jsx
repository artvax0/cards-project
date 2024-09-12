import React from 'react'
import { Box, CardContent, Link, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

export default function CardBody({ phone, street, houseNumber, city, state, country, zip, email, web }) {
    return (
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box component="div" display="flex" className="phoneNumber" alignItems='center' sx={{ mt: 1 }}>
                <PhoneIcon />
                <Typography variant="body1" paragraph mb={0} sx={{ display: 'flex', alignItems: 'center' }}> &nbsp; {phone}</Typography>
            </Box>
            <Box component="div" display="flex" className="email" alignItems='center'>
                <EmailIcon />
                <Typography variant="body1" paragraph mb={0} sx={{ display: 'flex', alignItems: 'center' }}> &nbsp; {email}</Typography>
            </Box>
            <Box component="div" display="flex" className="address" alignItems='center'>
                <PlaceIcon />
                <Typography variant="body1" paragraph mb={0} sx={{ display: 'flex', alignItems: 'center' }}> &nbsp; {street} {houseNumber}, {city}, {state ? state + ', ' : null} {country} {zip ? '| ' + zip : null}</Typography>
            </Box>
            <Link href='#' underline='hover' variant="body2">{web}</Link>
        </CardContent>
    )
}
