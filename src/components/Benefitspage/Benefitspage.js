import React from 'react'
import {
    Paper,
    Typography,
    Box
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import PageTitle from '../global/PageTitle/PageTitle'

import './Benefitspage.css'

const Benefitspage = () => {
    return (
        <div>
        <PageTitle title="Benefits" back />
        <div className="benefits-main">
            <div className="benefits-box1">
                <Paper className="benefits-box1-item1">
                    <Typography>Change</Typography>
                    <div className="benefits-item1">
                        <Box className="benefits-box">
                            <Link to="/benefits/change-benefits" className="benefits-link">Benefits</Link>
                        </Box>
                    </div>
                </Paper>
                <Paper className="benefits-box1-item2">
                    <Typography>View</Typography>
                    <div className="benefits-item2">
                        <Box className="benefits-box">
                            <Link to="/benefits/benefit-elections" className="benefits-link">Benefit Elections</Link>
                        </Box>
                        <Box className="benefits-box">
                            <Link to="/career/my-referrals" className="benefits-link">Benefit Elections as of Date</Link>
                        </Box>
                    </div>
                </Paper>
            </div>
            <div className="benefits-box2">
                <Paper className="benefits-box1-item1" style={{height: "150px"}}>
                    <Typography>Current Cost</Typography>
                    <p style={{color: "#696969", marginTop: "12px"}}>$ 7049.68</p>
                </Paper>
            </div>
        </div>
        </div>
    )
}

export default Benefitspage
