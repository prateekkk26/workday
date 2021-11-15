import React from 'react'
import {
    Paper,
    Typography,
    Box
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import PageTitle from '../global/PageTitle/PageTitle'

import './Paypage.css'

const Paypage = () => {
    return (
        <div>
            <PageTitle title="Pay" back />
            <Paper className="pay-container">
                <Typography>View</Typography>
                <Box className="pay-box">
                    <Link to="/pay/payslips" className="pay-link">Payslips</Link>
                </Box>
                <Box className="pay-box">
                    <Link to="#" className="pay-link">Total Rewards</Link>
                </Box>
                <Box className="pay-box">
                    <Link to="/pay/compensation" className="pay-link">Compensation Review Statement History</Link>
                </Box>
                <Box className="pay-box">
                    <Link to="/pay/bonus-and-one-time-payment-history" className="pay-link">Bonus & One-Time Payment History</Link>
                </Box>
                <Box className="pay-box">
                    <Link to="/pay/tax-document" className="pay-link">My Tax Documents</Link>
                </Box>
            </Paper>
        </div>
    )
}

export default Paypage
