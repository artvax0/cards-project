import React from 'react'
import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useTheme } from '../providers/CustomThemeProvider';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routesModel';
import AboutHeader from '../components/about/AboutHeader';
import AboutIntro from '../components/about/AboutIntro';
import AboutChooseUs from '../components/about/AboutChooseUs';
import AboutHowItWorks from '../components/about/AboutHowItWorks';
import AboutMission from '../components/about/AboutMission';

export default function AboutPage() {
  const { isDark } = useTheme();
  return (
    <Box display='flex' justifyContent='space-between'>
      <Box flexGrow={1} sx={{ color: isDark ? '#EEEEEE' : '#222831' }}>
        <AboutHeader />
        <AboutIntro />
        <AboutChooseUs />
        <AboutHowItWorks />
        <AboutMission />
      </Box>
    </Box>
  )
}
