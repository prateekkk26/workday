/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

import PageTitle from '../../../global/PageTitle/PageTitle'
import './Payslips.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    // color: theme.palette.common.black,
    fontWeight: "bold"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  // root: {
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // },
}))(TableRow);

function createData(paymentDate, startDate, endDate, company, grossAmount, netAmount, statement) {
  return { paymentDate, startDate, endDate, company, grossAmount, netAmount, statement };
}

const rows = [
  createData('2021/05/31', '2021/05/01', '2021/05/31', 'ZA Payroll Company', '$ 41,572.49', '$ 24,686.81'),
  createData('2021/05/31', '2021/05/01', '2021/05/31', 'ZA Payroll Company', '$ 41,572.49', '$ 24,686.81'),
  createData('2021/05/31', '2021/05/01', '2021/05/31', 'ZA Payroll Company', '$ 41,572.49', '$ 24,686.81'),
  createData('2021/05/31', '2021/05/01', '2021/05/31', 'ZA Payroll Company', '$ 41,572.49', '$ 24,686.81'),
  createData('2021/05/31', '2021/05/01', '2021/05/31', 'ZA Payroll Company', '$ 41,572.49', '$ 24,686.81'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Payslips = () => {
  const classes = useStyles();
  const theme = useTheme()
  
  return (
    <div>
    <PageTitle title=" My Payslips" />
    <div className="payslips-main">
        <Typography variant="subtitle2" style={{fontWeight: "bold", marginBottom: "8px"}}>External Payslips <span style={{color: theme.palette.action.active}}>{rows.length} items</span></Typography>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Payment Date</StyledTableCell>
                <StyledTableCell align="left">Period Start Date</StyledTableCell>
                <StyledTableCell align="left">Period End Date</StyledTableCell>
                <StyledTableCell align="left">Company</StyledTableCell>
                <StyledTableCell align="right">Gross Amount</StyledTableCell>
                <StyledTableCell align="right">Net Amount</StyledTableCell>
                <StyledTableCell align="left">View Statement</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell align="left">{row.paymentDate}</StyledTableCell>
                    <StyledTableCell align="left">{row.startDate}</StyledTableCell>
                    <StyledTableCell align="left">{row.endDate}</StyledTableCell>
                    <StyledTableCell align="left" style={{color: theme.palette.primary.main}}>{row.company}</StyledTableCell>
                    <StyledTableCell align="right">{row.grossAmount}</StyledTableCell>
                    <StyledTableCell align="right">{row.netAmount}</StyledTableCell>
                    <StyledTableCell align="left">
                        <div style={{display: "flex"}}>
                            <img 
                                src="https://cdn3.iconfinder.com/data/icons/muksis/128/pdf-512.png"
                                className="payslips-pdf-icon"
                            />
                            <Typography variant="caption" color="primary" style={{marginLeft: "12px"}}>21695_May.pdf</Typography>
                        </div>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    </div>
  );
}

export default Payslips