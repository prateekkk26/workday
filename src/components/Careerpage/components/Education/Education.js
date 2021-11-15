import React from 'react'
import {
    Typography,
    Button
} from '@material-ui/core'

import PageTitle from '../../../global/PageTitle/PageTitle'
import './Education.css'

const Education = () => {
    return (
        <div>
        <PageTitle title="Education" />
        <div className="education-main">
            <Typography>none entered</Typography>
        </div>
        <div className="change-benefits-btn-container" style={{position: "absolute", bottom: "0", display: "block"}}>
            <Button 
                variant="contained" 
                className="change-benefits-btn2"
            >Add</Button>
            <Button 
                variant="contained" 
                className="change-benefits-btn2"
            >Upload My Experience</Button>
        </div>
        </div>
    )
}

export default Education
