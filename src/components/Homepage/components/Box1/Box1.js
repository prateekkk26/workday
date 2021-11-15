import React from 'react'
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Paper, Typography } from '@material-ui/core'

import announcement from '../../../../img/announcement.svg'

import Inbox from '../Inbox/Inbox'

import './Box1.css'

const Box1 = () => {
    return (
        <div className="box1-main">
            <Paper className="box1-main-item">
            <div style={{display: "flex"}}>
                <img src={announcement} alt="Announcements" />
                <div style={{"alignSelf": "center", "marginLeft": "6px"}}>
                    <h4>Announcements</h4>
                    <p style={{fontSize:"12px", "marginTop": "5px"}}>3 items</p>
                </div>  
            </div>
            <div className="homepage-announcement-container">
                <div className="announcement-container">
                    <img src="https://cdn.pixabay.com/photo/2017/12/25/12/35/salary-3038325__340.jpg" className="announcement-image" />
                    <div className="announcement-info">
                        <h5>Payroll Cut Off</h5>
                        <Typography variant="caption">Payroll is now closed for May.</Typography>
                        <Typography variant="caption">Next payroll cut off is on the 11th of June COB.</Typography>
                    </div>
                </div>
                <div className="announcement-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR7l69CS7umGUjorvIX0JaSg5YhpM87-RzA&usqp=CAU" className="announcement-image" />
                    <div className="announcement-info">
                        <h5>User Guidelines and Manuals</h5>
                        <Typography variant="caption">
                            For assistance in navigating through Altron OneTouch, 
                            please click here to view the user manuals and video...
                        </Typography>
                    </div>
                </div>
                <div className="announcement-container">
                    <img src="data:image/png;base64,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" className="announcement-image" />
                    <div className="announcement-info">
                        <h5>{localStorage.getItem('company')} Assist - Employee Assistance Bot</h5>
                        <Typography variant="caption">Click here to access you virtual agent for assistance</Typography>
                    </div>
                </div>
            </div>
        </Paper>
        <Inbox />
        </div>
    )
}

export default Box1
