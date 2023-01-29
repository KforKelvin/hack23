import React from "react";
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
  table: {
    margin: '20px',
    // backgroundColor: 'ActiveBorder'
  },
});



export const Tables = (props) => {
  // const classes = useStyles();
  const classes = useStyles();
  const rows = [
    { id: 0, company: "American Express", name: "Blue Cash Everyday Card (BCE)", fee: 0, purpose: "Grocery", offer: 200, grocery: 3, gas: 3, online: 3, dining: 1, other: 1 },
    { id: 1, company: "American Express", name: "Blue Cash Preferred Card (BCP)", fee: 95, purpose: "Grocery", offer: 300, grocery: 6, gas: 3, online: 3, dining: 1, other: 1 },
    { id: 2, company: "American Express", name: "Schwab Investor Card", fee: 0, purpose: "All", offer: 200, grocery: 1.5, gas: 1.5, online: 1.5, dining: 1.5, other: 1.5 },
    // { id: 7, company: "Chase", name: "Freedom Student Card", fee: 0, purpose: "All", offer: 0, grocery: 0, gas: 0, online: 0, dining: 0, other: 0 },
    // { id: 8, company: "Citibank", name: "Citi AAdvantage Executive World Elite Master Card", fee: 450, purpose: "Flight", offer: "AAdvantage Points", grocery: 0, gas: 0, online: 0, dining: 0, other: 0 },
    // { id: 9, company: "Citibank", name: "Citi AAdvantage Select World Elite Master Card", fee: 99, purpose: "Flight", offer: "AAdvantage Points", grocery: 0, gas: 0, online: 0, dining: 0, other: 0 },
    // { id: 10, company: "Citibank", name: "Citi American Airlines AAdvantage MileUp Card", fee: 0, purpose: "Flight", offer: "AAdvantage Points", grocery: 0, gas: 0, online: 0, dining: 0, other: 0 },
    { id: 3, company: "Citibank", name: "Costco Anywhere Visa Card", fee: 0, purpose: "Grocery", offer: 0, grocery: 1, gas: 4, online: 2, dining: 3, other: 1 },
    { id: 4, company: "Barclays", name: "Barclays AAdvantage Aviator Red Credit Card", fee: 99, purpose: "Flight", offer: "AAdvantage Points", grocery: 0, gas: 0, online: 0, dining: 0, other: 0 },
    { id: 5, company: "Bank of America", name: "Bank of America Customized Cash Rewards Credit Card", fee: 0, purpose: "All", offer: 0, grocery: 3, gas: 3, online: 3, dining: 3, other: 1 },
    { id: 6, company: "Bank of America", name: "Bank of America Unlimited Cash Rewards Credit Card", fee: 0, purpose: "All", offer: 200, grocery: 1.5, gas: 1.5, online: 1.5, dining: 1.5, other: 1.5 },
    { id: 7, company: "Capital One", name: "Capital One QuixksilverOne Cash Rewards Credit Card", fee: 39, purpose: "All", offer: 0, grocery: 1.5, gas: 1.5, online: 1.5, dining: 1.5, other: 1.5 },
    { id: 8, company: "Capital One", name: "Capital One Quicksilver Cash Rewards Credit Card", fee: 0, purpose: "All", offer: 200, grocery: 1.5, gas: 1.5, online: 1.5, dining: 1.5, other: 1.5 },
    { id: 9, company: "Capital One", name: "Capital One SavorOne Cash Rewards Credit Card", fee: 0, purpose: "All", offer: 200, grocery: 3, gas: 1, online: 3, dining: 3, other: 1 },
    { id: 10, company: "Capital One", name: "Capital One Savor Cash Rewards Credit Card", fee: 95, purpose: "All", offer: 300, grocery: 3, gas: 1, online: 1, dining: 4, other: 1 },
    { id: 11, company: "Chase", name: "Amazon Prime Credit Card", fee: 0, purpose: "All", offer: 150, grocery: 2, gas: 2, online: 5, dining: 1, other: 1 },
    { id: 12, company: "Chase", name: "Freedom Flex (CFF)", fee: 0, purpose: "Grocery", offer: 200, grocery: 3, gas: 1, online: 1, dining: 3, other: 1 },
    { id: 13, company: "Chase", name: "Freedom Unlimited (CFU)", fee: 0, purpose: "Grocery", offer: 200, grocery: 3, gas: 3, online: 1.5, dining: 3, other: 1.5 },
    { id: 14, company: "Chase", name: "Instacart Credit Card", fee: 0, purpose: "All", offer: 100, grocery: 2, gas: 2, online: 5, dining: 2, other: 1 },
    { id: 15, company: "Wells Fargo", name: "Wells Fargo Active Cash Card", fee: 0, purpose: "All", offer: 250, grocery: 2, gas: 2, online: 2, dining: 2, other: 2 },
  ];

  return (
      <TableContainer component={Paper}>
       
        <Table sx={{ maxWidth: 700 }} aria-label="simple table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: 'h4.fontSize', fontWeight: "bold" }}>Name</TableCell>
              <TableCell align="right" sx={{ fontSize: 'h4.fontSize', fontWeight: "bold"}}>Company</TableCell>
              <TableCell align="right" sx={{ fontSize: 'h4.fontSize', fontWeight: "bold" }}>Sign up Fee</TableCell>
              <TableCell align="right" sx={{ fontSize: 'h4.fontSize', fontWeight: "bold" }}>Offer</TableCell>
              <TableCell align="right" sx={{ fontSize: 'h5.fontSize', fontWeight: "bold", borderTop: 1, borderLeft: 1, borderBottom:1 }}>Grocery&nbsp;(%)</TableCell>
              <TableCell align="right" sx={{ fontSize: 'h5.fontSize', fontWeight: "bold", borderTop: 1, borderBottom:1  }}>Gas&nbsp;(%)</TableCell>
              <TableCell align="right" sx={{ fontSize: 'h5.fontSize', fontWeight: "bold", borderTop: 1, borderBottom:1  }}>online retail&nbsp;(%)</TableCell>
              <TableCell align="right" sx={{ fontSize: 'h5.fontSize', fontWeight: "bold", borderTop: 1, borderBottom:1  }}>Dining&nbsp;(%)</TableCell>
              <TableCell align="right" sx={{ fontSize: 'h5.fontSize', fontWeight: "bold", borderTop: 1, borderBottom:1, borderRight:1  }}>Others&nbsp;(%)</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {rows.map((row) => (
              <TableRow 
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: 'h5.fontSize', fontStyle: "italic",fontWeight: "bold" }}>
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 'h5.fontSize' }}>{row.company}</TableCell>
                <TableCell align="right" sx={{ fontSize: 'h5.fontSize' }}>{row.fee}</TableCell>
                <TableCell align="right" sx={{ fontSize: 'h5.fontSize' }}>{row.offer}</TableCell>
                <TableCell align="right" sx={{ fontSize: 'h5.fontSize' }}>{row.grocery}</TableCell>
                <TableCell align="right" sx={{ fontSize: 'h5.fontSize' }}>{row.gas}</TableCell>
                <TableCell align="right" sx={{ fontSize: 'h5.fontSize' }}>{row.online}</TableCell>
                <TableCell align="right" sx={{ fontSize: 'h5.fontSize' }}>{row.dining}</TableCell>
                <TableCell align="right" sx={{ fontSize: 'h5.fontSize' }}>{row.other}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      
      </TableContainer>
    );
};
