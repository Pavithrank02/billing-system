import React from 'react'
import { Box, Grid, Typography,  Stack} from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import BasicTabs from '../components/Tabs';
import CustomerForm from '../components/forms/CustomerForm';
import SideNav from '../components/SideNav'
import Header from '../components/Header'





export const Customer = () => {

  return (
    <Grid>
      <Header />
      <Grid display={'flex'}>
        <SideNav />
        <Grid columns={2}>
          <Stack spacing={2} direction={'column'}>
            <Box height={30} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>
                  <Typography variant='h6' color={'black'}>
                      New Customer
                    </Typography>
                    <CustomerForm />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>
                    <Typography variant='h6' color={'black'}>
                      Popular Products
                    </Typography>
                    <BasicTabs />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack >

        </Grid>
      </Grid>
    </Grid>
  )
}
