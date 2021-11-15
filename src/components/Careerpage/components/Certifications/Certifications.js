import React from 'react'
import { Typography, Button } from '@material-ui/core'

import PageTitle from '../../../global/PageTitle/PageTitle'
import './Certifications.css'

const Certifications = () => {
    return (
        <div>
        <PageTitle title="Certifications" />
        <div className="certifications-main">
            <Typography>none entered</Typography>
        </div>
        <div className="change-benefits-btn-container" style={{position: "absolute", bottom: "0", display: "block"}}>
            <Button 
                variant="contained" 
                className="change-benefits-btn2"
            >Add</Button>
        </div>
        </div>
    )
}

export default Certifications
