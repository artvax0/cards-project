import React from 'react'
import { Container, Divider, Grid } from "@mui/material";
import { useTheme } from '../providers/CustomThemeProvider';
import AboutHeader from '../components/about/AboutHeader';
import AboutIntro from '../components/about/AboutIntro';
import AboutChooseUs from '../components/about/AboutChooseUs';
import AboutHowItWorks from '../components/about/AboutHowItWorks';
import AboutMission from '../components/about/AboutMission';

export default function AboutPage() {
  const { isDark } = useTheme();
  return (
    <Container maxWidth='md' sx={{ color: isDark ? '#EEEEEE' : '#222831' }}>
      <Grid container spacing={4} alignItems='stretch'>
        <AboutHeader />
        <Grid item xs={12}>
          <Divider variant='middle' />
        </Grid>
        <AboutIntro />
        <Grid item xs={12}>
          <Divider variant='middle' />
        </Grid>
        <AboutChooseUs />
        <Grid item xs={12}>
          <Divider variant='middle' />
        </Grid>
        <AboutHowItWorks />
        <Grid item xs={12}>
          <Divider variant='middle' />
        </Grid>
        <AboutMission />
      </Grid>
    </Container>
  )
}
