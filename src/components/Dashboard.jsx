import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SideNav from './SideNav'

export const Dashboard = () => {
  return (
    <Grid display={'flex'}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Typography variant='h3'>
        Dashboard
        </Typography>
      </Box>
    </Grid>
  )
}
