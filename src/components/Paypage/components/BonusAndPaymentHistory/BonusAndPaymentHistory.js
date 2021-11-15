import React from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

import PageTitle from '../../../global/PageTitle/PageTitle'
import './BonusAndPaymentHistory.css'
import { RowingRounded } from '@material-ui/icons';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(date, position, amount, currency) {
  return { 
    date,
    position,
    amount,
    currency
   };
}

const StyledTableRow = withStyles((theme) => ({
  // root: {
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // },
}))(TableRow);

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    // color: theme.palette.common.black,
    fontWeight: "bold"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('2021/06/01', 'Full Stack Engineer', 'xxxx', 'USD'),
  createRow('2021/06/01', 'Test Engineer', 'xxxx', 'USD'),
  createRow('2021/06/01', 'Intern', 'xxxx', 'USD'),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const BonusAndPaymentHistory = () => {
  const classes = useStyles();
  const theme = useTheme()

  return (
    <div>
    <PageTitle title="Bonus & One-Time Payment History" />
    <div className="referrals-main">
    <Typography variant="caption" style={{marginBottom: "30px", fontWeight: "bold"}}>
      Employee
      <Typography variant="caption" color="primary" style={{display: "inline", marginLeft: "14px", fontWeight: "bold"}}>{localStorage.title}</Typography>
    </Typography>
    <Typography variant="caption" style={{marginBottom: "8px"}}><span style={{color: theme.palette.action.active}}>{rows.length} items</span></Typography>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                <TableRow>
                    <CustomTableCell align="center">Effective Date</CustomTableCell>
                    <CustomTableCell align="center">Position</CustomTableCell>
                    <CustomTableCell colSpan={6} align="center">Bonus & One-Time Payments</CustomTableCell>
                </TableRow>
                <TableRow>
                    <CustomTableCell align="right" colSpan={6}>Amount</CustomTableCell>
                    <CustomTableCell align="center">Currency</CustomTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.candidate}>
                    <CustomTableCell align="center">{row.date}</CustomTableCell>
                    <CustomTableCell align="center">{row.position}</CustomTableCell>
                    <CustomTableCell colSpan={4} align="right">{row.amount}</CustomTableCell>
                    <CustomTableCell align="center">{row.currency}</CustomTableCell>
                    </StyledTableRow>
                ))}

                {/* <TableRow>
                    <CustomTableCell rowSpan={3} />
                    <CustomTableCell colSpan={2}>Subtotal</CustomTableCell>
                    <CustomTableCell align="right">{ccyFormat(invoiceSubtotal)}</CustomTableCell>
                </TableRow>
                <TableRow>
                    <CustomTableCell>Tax</CustomTableCell>
                    <CustomTableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</CustomTableCell>
                    <CustomTableCell align="right">{ccyFormat(invoiceTaxes)}</CustomTableCell>
                </TableRow>
                <TableRow>
                    <CustomTableCell colSpan={2}>Total</CustomTableCell>
                    <CustomTableCell align="right">{ccyFormat(invoiceTotal)}</CustomTableCell>
                </TableRow> */}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    </div>
  );
}

export default BonusAndPaymentHistory