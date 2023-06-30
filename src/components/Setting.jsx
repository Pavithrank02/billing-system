import React from 'react'
import SideNav from './SideNav'
import { Box, Grid, Typography } from '@mui/material'

export const Setting = () => {
  return (
    <Grid display={'flex'}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant='h3'>
        Setting
        </Typography>
      </Box>
    </Grid>
  )
}
