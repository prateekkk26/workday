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
import './Mentorship.css'

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

function createData(photo, worker) {
  return { photo, worker };
}

// const rows = [
//   createData('Photo1', 'Rahul'),
//   createData('Photo2', 'Akash'),
//   createData('Photo3', 'Riya')
// ];

const rows = []

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Mentorship = () => {
  const classes = useStyles();
  const theme = useTheme()

  return (
    <div>
    <PageTitle title="My Mentorships" />
    <div className="mentorship-main">
        <div className="mentorship-btn-group">
            <Button variant="contained" className="mentorship-btn">Add a Mentor</Button>
            <Button variant="contained" className="mentorship-btn">Find Mentor</Button>
        </div>
        <div className="mentorship-item">
            <Typography variant="h6" style={{marginBottom: "25px"}} className="mentorship-item-title">Mentors</Typography>
            <Typography variant="caption" style={{marginBottom: "8px"}}><span style={{color: theme.palette.action.active}}>{rows.length} items</span></Typography>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Photo</StyledTableCell>
                    <StyledTableCell>Worker</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell>{row.photo}</StyledTableCell>
                    <StyledTableCell>{row.worker}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            {
            !rows.length > 0 && <div style={{
                textAlign: "center",
                padding: "15px"
            }}>No Data Available</div>
            }
            </TableContainer>
        </div>
        <div className="mentorship-item">
            <Typography variant="h6" style={{marginBottom: "25px"}} className="mentorship-item-title">Mentees</Typography>
            <Typography variant='caption' style={{marginBottom: "8px"}}><span style={{color: theme.palette.action.active}}>{rows.length} items</span></Typography>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Photo</StyledTableCell>
                    <StyledTableCell>Worker</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell>{row.photo}</StyledTableCell>
                    <StyledTableCell>{row.worker}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            {
            !rows.length > 0 && <div style={{
                textAlign: "center",
                padding: "15px"
            }}>No Data Available</div>
            }
            </TableContainer>
        </div>
        <div className="mentorship-item">
            <Typography variant="h6"style={{marginBottom: "25px"}} className="mentorship-item-title">Past Mentorship</Typography>
            <Typography variant="caption" style={{marginBottom: "8px"}}><span style={{color: theme.palette.action.active}}>{rows.length} items</span></Typography>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Photo</StyledTableCell>
                    <StyledTableCell>Worker</StyledTableCell>
                    <StyledTableCell>Role</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell>{row.photo}</StyledTableCell>
                    <StyledTableCell>{row.worker}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            {
            !rows.length > 0 && <div style={{
                textAlign: "center",
                padding: "15px"
            }}>No Data Available</div>
            }
            </TableContainer>
        </div>
    </div>
    </div>
  );
}

export default Mentorship