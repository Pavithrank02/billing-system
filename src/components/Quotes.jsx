import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Grid, TextField, Typography } from '@mui/material';


const TAX_RATE = 0.7;

 const Quotes = () => {
  const [customerName, setCustomerName] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [invoiceData, setInvoiceData] = useState(null);

  const handleGenerateInvoice = () => {
    const newItem = {
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
    };
    const newInvoice = {
      customerName,
      items: [newItem],
    };
    setInvoiceData(newInvoice);
  };

  const calculateTotal = () => {
    if (!invoiceData) return 0;
    return calculateSubtotal() + calculateTax();
  };
  const calculateSubtotal = () => {
    if (!invoiceData) return 0;
    return invoiceData.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    if (!invoiceData) return 0;
    return (calculateSubtotal() * TAX_RATE) / 100;
  };

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
          <TableRow onBlur={handleGenerateInvoice}>
            <TableCell>
              <Grid item xs={2} marginBottom={2} >
                <TextField sx={{ width: 310 }} id="outlined-basic" label="" variant="outlined" size="small" value={itemName} onChange={(e) => setItemName(e.target.value)} />
              </Grid>
            </TableCell>
            <TableCell align="right">
              <Grid item xs={2} marginBottom={2} >
                <TextField sx={{ width: 310 }} id="outlined-basic" label="" variant="outlined" size="small" alue={itemPrice} onChange={(e) => setItemPrice(parseFloat(e.target.value))} />
              </Grid>
            </TableCell>
            <TableCell align="right">
              <Grid item xs={2} marginBottom={2} >
                <TextField sx={{ width: 310 }} id="outlined-basic" label="" variant="outlined" size="small" onChange={(e) => setItemQuantity(parseInt(e.target.value))}  />
              </Grid>
            </TableCell>
            {invoiceData && invoiceData.items.map((item, index) => (
            <TableCell key={index} align="right">{(item.price * item.quantity).toFixed(2)}</TableCell>
          ))}
            <TableCell align="right" >
              <Grid item xs={2} marginBottom={2}  cursor={"pointer"}>
                <AddCircleIcon />
              </Grid>
            </TableCell>
            <TableCell align="right" >
              {/* {textFields.map((value, index) => (
              <Grid item xs={2} marginBottom={2} key={index}>
                <input
                  type="text"
                  value={value}
                  // onChange={(e) => handleChange(index, e.target.value)}
                />
              </Grid>
            ))} */}
            </TableCell>
        
          </TableRow>
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">${calculateSubtotal().toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{calculateTax().toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}> <Typography variant='h6'>Total</Typography></TableCell>
            <TableCell align="right">{calculateTotal().toFixed(2)}</TableCell>
            
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Quotes