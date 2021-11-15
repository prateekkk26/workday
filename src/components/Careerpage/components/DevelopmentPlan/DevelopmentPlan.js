import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, TextField, InputAdornment, Button } from '@material-ui/core'
import {
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DehazeIcon from '@material-ui/icons/Dehaze';

import PageTitle from '../../../global/PageTitle/PageTitle'
import './DevelopmentPlan.css'

const useStyles = makeStyles((theme) => ({
    margin: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
      border: "1px solid #c0c0c0",
      padding: "5px 5px 0 5px",
      borderRadius: "5px",
      alignSelf: "center"
    },
    title: {
        fontWeight: "bold",
        alignSelf: "center"
    }
  }));

const DevelopmentPlan = () => {
    const classes = useStyles()
    const history = useHistory()

    return (
        <div>
        <PageTitle title="Start My Development Plan" />
        <div className="development-plan-main">
            <div className="development-plan-input">
                <Typography variant="caption" style={{alignSelf: "center", width: "10%"}} className={classes.title}>Review Template:</Typography>
                <div style={{width: "90%"}}>
                <span className="mandatory">*</span>
                <TextField
                type="outline"
                    className={classes.margin}
                    id="input-with-icon-textfield"
                    // label="Search"
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <DehazeIcon />
                        </InputAdornment>
                    ),
                    }}
                />
                </div>
            </div>
            <div className="development-plan-input">
                <Typography variant="caption" style={{alignSelf: "center", width: "10%"}} className={classes.title}>Period Start Date:</Typography>
                <div style={{width: "90%", display: "flex"}}>
                <span className="mandatory">*</span>
                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        // label="Start Date"
                        type="date"
                        defaultValue="YYYY/MM/DD"
                        className={classes.margin}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
                </div>
            </div>
            <div className="development-plan-input">
                <Typography variant="caption" style={{alignSelf: "center", width: "10%"}} className={classes.title}>Period End Date:</Typography>
                <div style={{width: "90%", display: "flex"}}>
                <span className="mandatory">*</span>
                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        // label="End Date"
                        type="date"
                        defaultValue="YYYY/MM/DD"
                        className={classes.margin}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
                </div>
            </div>
        </div>
        <div className="change-benefits-btn-container" style={{position: "absolute", bottom: "0", display: "block"}}>
            <Button variant="contained" color="secondary" className="change-benefits-btn1">Submit</Button>
            <Button 
                variant="contained" 
                className="change-benefits-btn2"
                onClick={() => history.push('/career')}
            >Cancel</Button>
        </div>
        </div>
    )
}

export default DevelopmentPlan
