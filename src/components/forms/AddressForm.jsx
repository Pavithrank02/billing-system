import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CountrySelect from '../textfields/SelectCountry';

const AddressForm = () => {
  return (
    <Grid>
       <Grid container >
          <Grid item xs={2} marginTop={2} >
            <Typography variant='body'>Name</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2} >
            <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={2} marginTop={2} >
            <Typography variant='body'>Country / Region</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2}>
            <CountrySelect />
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={2} marginTop={2} >
            <Typography variant='body'>State</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2}>
          <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
          
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={2} marginTop={2} >
            <Typography variant='body'>City</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2} >
            <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={2} marginTop={2} >
            <Typography variant='body'>Zip Code</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2} >
            <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={2} marginTop={2} >
            <Typography variant='body'>Phone</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2} >
            <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
          </Grid>
        </Grid>
    </Grid>
  )
}

export default AddressForm