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
import Button from '@material-ui/core/Button'

import PageTitle from '../../../global/PageTitle/PageTitle'
import './Competencies.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    // color: theme.palette.common.white,
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

function createData(competency, rating) {
  return { competency, rating };
}

const rows = [
  createData('Competency1', 4),
  createData('Competency2', 5),
  createData('Competency3', 2.5)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Competencies = () => {
  const classes = useStyles();
  const theme = useTheme()

  return (
    <div>
    <PageTitle title="Competencies" />
    <div className="competencies-main">
        <Typography variant="caption"><span style={{color: theme.palette.action.active}}>{rows.length} items</span></Typography>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Competency</StyledTableCell>
                <StyledTableCell align="left">Assessed Rating</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell align="left">{row.competency}</StyledTableCell>
                <StyledTableCell align="left">{row.rating}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    <div className="change-benefits-btn-container" style={{position: "absolute", bottom: "0", display: "block"}}>
        <Button 
            variant="contained" 
            className="change-benefits-btn2"
        >History</Button>
    </div>
    </div>
  );
}

export default Competencies