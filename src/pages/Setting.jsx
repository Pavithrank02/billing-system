import React from 'react'
import SideNav from '../components/SideNav'
import { Box, Grid, Typography } from '@mui/material'
import Header from '../components/Header'

export const Setting = () => {
  return (
    <Grid>
    <Header />
    <Grid display={'flex'}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant='h3'>
          Setting
        </Typography>
      </Box>
    </Grid>
  </Grid>
  )
}
