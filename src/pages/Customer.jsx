import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SideNav from '../components/SideNav'
import Header from '../components/Header'

export const Customer = () => {
  return (
    <Grid>
      <Header />
      <Grid display={'flex'}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant='h3'>
            Customer
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
