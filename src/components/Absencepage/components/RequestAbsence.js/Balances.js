import React from 'react'
import {
    Typography,
    TextField
} from '@material-ui/core'

const Balances = () => {
    return (
        <div className="balances-main">
            <Typography variant="h5" style={{fontWeight: "bold", marginBottom: "15px"}}>Balances</Typography>
            <div className="absence-date">
                <Typography variant="caption" style={{alignSelf: "center"}}>Balance as of</Typography>
                <form noValidate style={{marginLeft: "5px", marginBottom: "10px"}}>
                    <TextField
                        id="date"
                        type="date"
                        style={{padding: "5px", width: "170px"}}
                        defaultValue="YYYY/MM/DD"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
            </div>
            <Typography variant="h5" style={{fontWeight: "bold", marginBottom: "10px"}}>Per Plan</Typography>
            <div className="balances-list-item" style={{borderTop: "none"}}>
                <Typography variant="caption">Annual Leave - S.A (Days)</Typography>
                <Typography variant="caption">3.75 Days</Typography>
            </div>
            <div className="balances-list-item">
                <Typography variant="caption">Corporate Social Initiative Leave</Typography>
                <Typography variant="caption">0 Days</Typography>
            </div>
            <div className="balances-list-item">
                <Typography variant="caption">Family Leave</Typography>
                <Typography variant="caption">5 Days</Typography>
            </div>
            <div className="balances-list-item">
                <Typography variant="caption">Leave in Lieu of Overtime</Typography>
                <Typography variant="caption">0 Days</Typography>
            </div>
            <div className="balances-list-item">
                <Typography variant="caption">Paternity Leave</Typography>
                <Typography variant="caption">2 Days</Typography>
            </div>
            <div className="balances-list-item">
                <Typography variant="caption">Sick Leave S.A</Typography>
                <Typography variant="caption">1.67 Days</Typography>
            </div>
            <div className="balances-list-item">
                <Typography variant="caption">Annual Leave - S.A (Days)</Typography>
                <Typography variant="caption">3.75 Days</Typography>
            </div>
        </div>
    )
}

export default Balances
