import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useData from '../utils/useData';
function UserTable({ users }) {
  const [data] = useData()
  console.log(data)
  // const headers = data && data.map((jey) => {
  //   return jey});
    return (
      <div>
      <h2>User Information Table</h2>
      <TableContainer component={Paper}>
          {/* <Table>
              <TableHead>
                  <TableRow>
                      {headers.map(header => (
                          <TableCell key={header}>{header}</TableCell>
                      ))}
                  </TableRow>
              </TableHead>
              <TableBody>
                  {users.map(user => (
                      <TableRow key={user.id}>
                          {headers.map(header => (
                              <TableCell key={header}>{user[header]}</TableCell>
                          ))}
                      </TableRow>
                  ))}
              </TableBody>
          </Table> */}
      </TableContainer>
  </div>
    );
}

export default UserTable;
