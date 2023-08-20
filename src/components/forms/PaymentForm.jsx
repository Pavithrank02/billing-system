import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
const PaymentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salutation: '', 
    customerType: "", 
    phone: "", 

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <Grid>
       <Grid container >
          <Grid item xs={2} marginTop={2} >
            <Typography variant='body'>GST Number</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2} >
            <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={2} marginTop={2} >
            <Typography variant='body'>Pan Number</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2} >
            <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={2} marginTop={2} >
            <Typography variant='body'>Payment terms</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2} >
            <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
          </Grid>
        </Grid>
        <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Payment Status</Typography>
        </Grid>
        <Grid item xs={3} marginBottom={2} >
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={formData.customerType}
            onChange={handleInputChange}
          >
            <Stack spacing={2} direction={'row'} >
              <FormControlLabel name="Business" value="Paid" control={<Radio />} label="Paid" />
              <FormControlLabel name="Individual" value="UnPaid" control={<Radio />} label="UnPaid" />
            </Stack>
          </RadioGroup>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PaymentForm