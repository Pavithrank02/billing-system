import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import SideNav from '../components/SideNav'
import Header from '../components/Header'

export const Customer = () => {
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <Grid display={'flex'} flexDirection={'row'}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Customer Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="Business" control={<Radio />} label="Business" />
              <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
            </RadioGroup>
          </FormControl>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
