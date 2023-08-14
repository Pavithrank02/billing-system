import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useData from '../utils/useData';
function UserTable() {
  const [data] = useData()
  console.log(data)
  // const headers = data && data.map((jey) => {
  //   return jey});
    return (
      <div>
        {data && data.age}
  </div>
    );
}

export default UserTable;
