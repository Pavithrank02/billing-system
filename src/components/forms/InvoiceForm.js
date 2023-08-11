import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Quotes from '../Quotes'
import { DateField } from '@mui/x-date-pickers';

const InvoiceForm = () => {
  return (
    <Grid>
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
          <Typography variant='body'>Invoice Number</Typography>
        </Grid>
        <Grid item xs={3} marginBottom={2}>
          <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Date</Typography>
        </Grid>
        <Grid item xs={3} marginBottom={2} >
          <DateField />
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Company Name</Typography>
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
      <Grid container >
        <Grid item xs={2} marginTop={2} >
          <Typography variant='body'>Address</Typography>
        </Grid>
        <Grid item xs={3} marginBottom={2} >
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
            <Typography variant='body'>GST Number</Typography>
          </Grid>
          <Grid item xs={3} marginBottom={2} >
            <TextField sx={{ fullW: 210 }} id="outlined-basic" label="" variant="outlined" size="small" fullWidth={true} />
          </Grid>
        </Grid>
        <Grid container >
          <Quotes />
        </Grid>

    </Grid>
  )
}

export default InvoiceForm