import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import Quotes from '../components/Quotes'
import InvoiceForm from '../components/forms/InvoiceForm'

export const Billing = () => {
  return (
    <Grid>
    <Header />
    <Box height={70} />
    <Grid display={'flex'}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <InvoiceForm />
      </Box>
    </Grid>
  </Grid>
  )
}
