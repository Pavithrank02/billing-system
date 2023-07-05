
import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import Tabs from '../components/Tabs';
import BasicTabs from '../components/Tabs';
import CustomerForm from '../components/forms/CustomerForm';

const Invoice = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  
  };
  return (
    <Stack spacing={2} direction={'column'}>

      <Box height={30} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ height: 60 + 'vh' }}>
            <CardContent>
            Customer Type
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
  )
}

export default Invoice