import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

import PageTitle from '../../../global/PageTitle/PageTitle'
import './CompensationReview.css'

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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  // row: {
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.background.default,
  //   },
  // },
});

let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat, carbs};
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24),
//   createData('Ice cream sandwich', 237, 9.0, 37),
//   createData('Eclair', 262, 16.0, 24),
//   createData('Cupcake', 305, 3.7, 67),
//   createData('Gingerbread', 356, 16.0, 49),
// ];

const rows = []

const CompensationReview = (props) => {
  const { classes } = props;
  const theme = useTheme()

  return (
    <div>
    <PageTitle title="My Compensation Review Statement History" />
    <div className="compensation-review-main">
      <Typography variant="caption"><span style={{color: theme.palette.action.active}}>{rows.length} items</span></Typography>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Effective Date</CustomTableCell>
              <CustomTableCell align="left">Compensation Review Process</CustomTableCell>
              <CustomTableCell align="left">Position</CustomTableCell>
              <CustomTableCell align="left">Compensation Review Statement PDF</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell align="left">{row.calories}</CustomTableCell>
                <CustomTableCell align="left">{row.fat}</CustomTableCell>
                <CustomTableCell align="left">{row.carbs}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {
          !rows.length > 0 && <div style={{
              textAlign: "center",
              padding: "15px"
          }}>No Data Available</div>
          }
      </Paper>
    </div>
    </div>
  );
}

CompensationReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompensationReview);