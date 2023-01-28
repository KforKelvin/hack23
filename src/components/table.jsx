import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const Tables = (props) => {

  const rows = [
    { id: 1, company: "American Express", name: 'Blue Cash Everyday Card (BCE)', fee: 42, purpose: "Grocery", offer: 200, grocery:3 , gas:3, online:3, dining: 1, other: 0   },
    { id: 1, company: "American Express", name: 'Blue Cash Everyday Card (BCE)', fee: 42, purpose: "Grocery", offer: 200, grocery:3 , gas:3, online:3, dining: 1, other: 0   },
    { id: 1, company: "American Express", name: 'Blue Cash Everyday Card (BCE)', fee: 42, purpose: "Grocery", offer: 200, grocery:3 , gas:3, online:3, dining: 1, other: 0   },
  ];

  return (
      <TableContainer component={Paper}>
       
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right">Fee</TableCell>
              <TableCell align="right">Offer</TableCell>
              <TableCell align="right">Cash back on Grocery&nbsp;(%)</TableCell>
              <TableCell align="right">Cash back on Gas&nbsp;(%)</TableCell>
              <TableCell align="right">Cash back on online retail&nbsp;(%)</TableCell>
              <TableCell align="right">Cash back on Dining&nbsp;(%)</TableCell>
              <TableCell align="right">Cash back on Others&nbsp;(%)</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.company}</TableCell>
                <TableCell align="right">{row.fee}</TableCell>
                <TableCell align="right">{row.offer}</TableCell>
                <TableCell align="right">{row.grocery}</TableCell>
                <TableCell align="right">{row.gas}</TableCell>
                <TableCell align="right">{row.online}</TableCell>
                <TableCell align="right">{row.dining}</TableCell>
                <TableCell align="right">{row.other}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      
      </TableContainer>
    );
};
