import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "../providers/CustomThemeProvider";
const Error = ({ errorMessage }) => {
    const { isDark } = useTheme();
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" color={isDark ? '#EEEEEE' : '#222831'}>
                        Oops... Something went wrong, contact a system administrator, error message: <strong>{errorMessage}</strong>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} justifyContent="center">
                    <img
                        width="100%"
                        src="/paper-shredder.png"
                        alt="broken robot"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Error;