import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SideNav from '../components/SideNav'
import Header from '../components/Header'

export const About = () => {
  return (
    <Grid>
    <Header />
    <Box height={70} />
    <Grid display={'flex'}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant='h3'>
          About
        </Typography>
      </Box>
    </Grid>
  </Grid>
  )
}
