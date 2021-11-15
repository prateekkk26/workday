import React from 'react'
import {
    Paper,
    Typography,
    Box
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import PageTitle from '../global/PageTitle/PageTitle'
import './Absencepage.css'

const Absencepage = () => {
    return (
        <div>
        <PageTitle title="Absence" back />
        <div className="absence-main">
            <div className="absence-box1">
                <Paper className="absence-box1-item1">
                    <Typography>Request</Typography>
                    <div className="absence-item1">
                        <Box className="absence-box">
                            <Link to="/request-absence" className="absence-link">Request Absence</Link>
                        </Box>
                        <Box className="absence-box">
                            <Link to="#" className="absence-link">Correct My Absence</Link>
                        </Box>
                        <Box className="absence-box">
                            <Link to="#" className="absence-link">Request Return from Leave of Absence</Link>
                        </Box>
                    </div>
                </Paper>
                <Paper className="absence-box1-item2">
                    <Typography>View</Typography>
                    <div className="absence-item2">
                        <Box className="absence-box">
                            <Link to="#" className="absence-link">My Absence</Link>
                        </Box>
                        <Box className="absence-box">
                            <Link to="#" className="absence-link">Available Absence</Link>
                        </Box>
                    </div>
                </Paper>
            </div>
            <div className="absence-box2">
                <Paper className="absence-box1-item1">
                    <Typography>Available Balance as of Today</Typography>
                    <Typography variant="subtitle2" style={{marginTop: "15px"}}>Does not include future absence requessts</Typography>
                    <div className="absence-list-container">
                        <div>3.75 Days - Annual Leave - S.A(Days)</div>
                        <div>0 Days - Corporate Social Initiative Leave</div>
                        <div>5 Days - Family Leave</div>
                        <div>0 Hours - Leave in Lieu of Overtime</div>
                        <div>2 Days - Paternity Leave</div>
                        <div>1.67 Days = Sick Leave S.A</div>
                        <div>0 Days - Special Leave</div>
                        <div>0 Days - Work At Home S.A</div>
                    </div>
                </Paper>
            </div>
        </div>
        </div>
    )
}

export default Absencepage
