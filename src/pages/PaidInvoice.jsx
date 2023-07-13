
import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SideNav from '../components/SideNav'
import UnPaidInvoiceTable from '../components/tables/UnPaidInvoiceTable';
import Header from '../components/Header';


const PaidInvoiceTable = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  
  };
  return (
    <Grid>
    <Header />
    <Box height={70} />
    <Grid display={'flex'}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <UnPaidInvoiceTable />
      </Box>
    </Grid>
  </Grid>
  )
}

export default PaidInvoiceTable