import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Grid, TextField, Typography } from '@mui/material';


const TAX_RATE = 0.07;

// function ccyFormat(num) {
//   return `${num.toFixed(5)}`;
// }

// function priceRow(qty, unit) {

//   return qty * unit;
// }

// function createRow(desc, qty, unit) {

//   const price = priceRow(qty, unit);
//   // console.log(price)
//   return { desc, qty, unit, price };
// }
// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

//   const invoiceSubtotal = subtotal();
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;





export default function Quotes() {
  const [inputs, setInputs] = React.useState({
    desc: "",
    qty: "",
    unit: ""
  })
  const addField = () => {
    console.log("click")
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Item Details</TableCell>
            <TableCell align="left">Qty.</TableCell>
            <TableCell align="left">Unit</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow >
            <TableCell>
              <Grid item xs={2} marginBottom={2} >
                <TextField sx={{ width: 310 }} id="outlined-basic" label="" variant="outlined" size="small" value={inputs.qty} onChange={(e) => setInputs(e.target.value)} />
              </Grid>
            </TableCell>
            <TableCell align="right">
              <Grid item xs={2} marginBottom={2} >
                <TextField sx={{ width: 310 }} id="outlined-basic" label="" variant="outlined" size="small" value={inputs.qty} onChange={(e) => setInputs(e.target.value)} />
              </Grid>
            </TableCell>
            <TableCell align="right">
              <Grid item xs={2} marginBottom={2} >
                <TextField sx={{ width: 310 }} id="outlined-basic" label="" variant="outlined" size="small" value={inputs.unit} onChange={(e) => setInputs(e.target.value)} />
              </Grid>
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right" >
              <Grid item xs={2} marginBottom={2} onClick={addField} cursor={"pointer"}>
               <AddCircleIcon />
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            {/* <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            {/* <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}> <Typography variant='h6'>Total</Typography></TableCell>
            {/* <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}