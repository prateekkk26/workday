import React from 'react'
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { Typography, Paper } from '@material-ui/core'

import inbox from '../../../../img/inbox.svg'
import dots from '../../../../img/dots.svg'
import './Inbox.css'

const Inbox = () => {
    return (
        <Paper className="inbox-container">
            <div className="inbox-wrapper">
                <div style={{display: "flex", width: "100%", "marginBottom": "20px"}}>
                    <img src={inbox} alt="Inbox" />
                    <div style={{"alignSelf": "center", "marginLeft": "6px"}}>
                        <h4>Inbox</h4>
                        <p style={{fontSize:"12px", "marginTop": "5px"}}>1 item</p>
                    </div>
                    <img src={dots} className="inbox-more-icon" />
                </div>
                <p style={{fontWeight: "bold"}}>Set Content: {localStorage.getItem('company')} Goal Setting Template: Offentse Sepeng</p>
                <p>3 month(s) ag - Effective 2021/04/30</p>
            </div>
            <a href="#"><Typography color="primary">Go To Inbox</Typography></a>
        </Paper>
    )
}

export default Inbox
