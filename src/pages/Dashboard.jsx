import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SideNav from '../components/SideNav'
import Header from '../components/Header'

export const Dashboard = () => {
  return (
    <Grid>
      <Header />
      <Grid display={'flex'} marginTop={10}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant='h3'>
            Dashboard
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
