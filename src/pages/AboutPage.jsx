import React from 'react'
import { Box } from "@mui/material";
import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title='About'
        subtitle='On this page you can find explanations about using the application'
        sx={{ mx: '25px' }}
      />
      <Box display='flex' justifyContent='space-between' mt={2} mx='25px'>
        <Box flexGrow={1}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum debitis voluptate quam ab, ratione itaque omnis cum vel aliquid assumenda. Fugit distinctio perferendis laboriosam error harum iure deleniti atque illum omnis illo nesciunt animi delectus, porro excepturi? Expedita harum eligendi sint, dolorem consequatur architecto explicabo, ex, voluptatem ab quia nobis.
        </Box>
        <Box>
          <Box component='img' src={"/cardImage.png"} alt="Card" />
        </Box>
      </Box>
    </>
  )
}
