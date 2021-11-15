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
import './BenefitElections.css'

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

function createData(plan, coverageBeginDate, deductionBeginDate, coverage, calculatedCoverage, dependents, beneficiaries, employeeCost, employerContribution) {
  return { 
    plan, 
    coverageBeginDate, 
    deductionBeginDate, 
    coverage, 
    calculatedCoverage, 
    dependents,
    beneficiaries, 
    employeeCost, 
    employerContribution 
  };
}

const rows = [
  createData('Medical Aid (ZAF)-Discovery-Essential Server', '2020/06/01', '2020/06/01', 'xxxx','xxxx','xxxx','xxxx','xxxx','xxxx'),
  createData('Vitality (ZAF)-Discovery-Vitality', '2020/06/01', '2020/06/01', 'xxxx','xxxx','xxxx','xxxx','xxxx','xxxx'),
  createData('Funeral Insurance (ZAF)-Saniam-Age 40-44 (Employee)', '2020/06/01', '2020/06/01', 'xxxx','xxxx','xxxx','xxxx','xxxx','xxxx'),
  createData('Provident Fund (ZAF)-Saniam', '2020/06/01', '2020/06/01', 'xxxx','xxxx','xxxx','xxxx','xxxx','xxxx'),
  createData('Medical Aid', '2020/06/01', '2020/06/01', 'xxxx','xxxx','xxxx','xxxx','xxxx','xxxx'),
  createData('Medical Aid', '2020/06/01', '2020/06/01', 'xxxx','xxxx','xxxx','xxxx','xxxx','xxxx'),
];

// const rows = []

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    overflowX: "auto"
  },
});

const BenefitElections = () => {
  const classes = useStyles();
  const theme = useTheme()

  return (
    <div>
    <PageTitle title="Benefit Elections" />
    <div className="competencies-main">
        <Typography variant="caption" style={{fontWeight: "bold", marginBottom: "8px"}}>Current Benefits Election and Cost <span style={{color: theme.palette.action.active}}>{rows.length} items</span></Typography>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Benefit Plan</StyledTableCell>
                <StyledTableCell align="left">Coverage Begin Date</StyledTableCell>
                <StyledTableCell align="left">Deduction Begin Date</StyledTableCell>
                <StyledTableCell align="left">Coverage</StyledTableCell>
                <StyledTableCell align="right">Calculated Coverage</StyledTableCell>
                <StyledTableCell align="left">Dependencies</StyledTableCell>
                <StyledTableCell align="left">Beneficiaries</StyledTableCell>
                <StyledTableCell align="right">Employee Cost (Monthly)</StyledTableCell>
                <StyledTableCell align="right">Employee Contribution (Monthly)</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="left" style={{backgroundColor: theme.palette.action.hover}}>{row.plan}</StyledTableCell>
                  <StyledTableCell align="left">{row.coverageBeginDate}</StyledTableCell>
                  <StyledTableCell align="left">{row.deductionBeginDate}</StyledTableCell>
                  <StyledTableCell align="left">{row.coverage}</StyledTableCell>
                  <StyledTableCell align="right">{row.calculatedCoverage}</StyledTableCell>
                  <StyledTableCell align="left">{row.dependents}</StyledTableCell>
                  <StyledTableCell align="left">{row.beneficiaries}</StyledTableCell>
                  <StyledTableCell align="right">{row.employeeCost}</StyledTableCell>
                  <StyledTableCell align="right">{row.employerContribution}</StyledTableCell>
                </StyledTableRow>
            ))}
            <StyledTableRow>
              <StyledTableCell align="right" colSpan={7}>Total:</StyledTableCell>
              <StyledTableCell align="right">$ 7,067.00</StyledTableCell>
              <StyledTableCell align="right">$ 2,615.94</StyledTableCell>
            </StyledTableRow>
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
  );
}

export default BenefitElections