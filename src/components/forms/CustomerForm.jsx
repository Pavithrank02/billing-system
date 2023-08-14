import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Salutation from '../textfields/Salutation';
import { Stack } from '@mui/material';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Grid >
      <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Customer Type</Typography>
        </Grid>
        <Grid item xs={3} marginBottom={2} >
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleInputChange}
          >
            <Stack spacing={2} direction={'row'} >
              <FormControlLabel value="Business" control={<Radio />} label="Business" />
              <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
            </Stack>
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Primary Contact</Typography>
        </Grid>
        <Grid item xs={1} marginBottom={2}>
          <Salutation />
        </Grid>
        <Grid item xs={1} marginBottom={2} marginLeft={2}>
          <TextField id="outlined-basic" label="FirstName" variant="outlined" size="small" name="firstName"
        value={formData.firstName} />
        </Grid>
        <Grid item xs={1} marginBottom={2} marginLeft={2}>
          <TextField id="outlined-basic" label="LastName" variant="outlined" size="small" name="lastName"
        value={formData.lastName}/>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Customer Name</Typography>
        </Grid>
        <Grid item xs={3} marginBottom={2} >
          <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Customer Display Name</Typography>
        </Grid>
        <Grid item xs={3} marginBottom={2} >
          <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Customer Phone</Typography>
        </Grid>
        <Grid item xs={3} marginBottom={2} >
          <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Customer Email</Typography>
        </Grid>
        <Grid item xs={3} marginBottom={2} >
          <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} name="firstName"
        value={formData.email}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CustomerForm