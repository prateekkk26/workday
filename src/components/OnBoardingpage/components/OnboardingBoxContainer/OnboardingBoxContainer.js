import React from 'react'
import {
    Box,
    Paper,
    Typography
} from '@material-ui/core'

import {
    DesktopMac,
    Link
} from '@material-ui/icons'
import Induction from './Induction'
import HelpfulContacts from './HelpfulContacts'
import FromMyManager from './FromMyManager'
import GettingStarted from './GettingStarted'


import links from '../../../../img/links.svg'
import laptop from '../../../../img/laptop.svg'
import './OnboardingBoxContainer.css'

const OnboardingBoxContainer = () => {
    return (
        <div className="onboarding-box-container">
            <div className="onboarding-item1">
                <Paper className="onboarding-item">
                    <Typography variant="h7" style={{fontWeight: "bold"}}>Access AltronOneTouch anywhere, anytime</Typography>
                    <div className="onboarding-box-list-item">
                        <Box className="onboarding-item-box" bgcolor="primary.main">
                            {/* <DesktopMac className="onboarding-box-icon" /> */}
                            <img src={laptop} className="onboarding-box-icon" />
                        </Box>
                        <Typography variant="caption" style={{marginLeft: "15px"}} className="onboarding-box-list-item-info">
                            The Workday app provides secure, mobile access to your Workday application on the-go...
                        </Typography>
                    </div>
                </Paper>
                <Paper className="onboarding-item">
                    <Typography variant="h7" style={{fontWeight: "bold"}}>Quicklinks</Typography>
                    <div className="onboarding-box-list-item">
                        <Box className="onboarding-item-box" bgcolor="primary.main">
                            {/* <Link className="onboarding-box-icon" /> */}
                            <img src={links} className="onboarding-box-icon" />
                        </Box>
                        <div className="onboarding-box-list-item-info">
                            <Typography variant="caption" style={{fontWeight: "bold"}}>My {localStorage.getItem('company')}</Typography>
                            <Typography variant="caption">
                                The MyAltron Internet Site provides all the latest news, updates and information to all em...
                            </Typography>
                            <Typography 
                                color="primary" 
                                variant="caption" 
                                style={{fontWeight: "bold", "marginTop":"14px"}}
                                className="onboarding-info-link"    
                            >My {localStorage.getItem('company')}</Typography>
                        </div>
                    </div>
                    <div className="onboarding-box-list-item">
                        <Box className="onboarding-item-box" bgcolor="primary.main">
                            <img src={links} className="onboarding-box-icon" />
                        </Box>
                        <div className="onboarding-box-list-item-info">
                            <Typography variant="caption" style={{fontWeight: "bold"}}>D365 User Manuals</Typography>
                            <Typography variant="caption">
                                This page contains training for all D365 transaction. Click on the Blue link beio...
                            </Typography>
                            <Typography 
                                color="primary" 
                                variant="caption" 
                                style={{fontWeight: "bold", "marginTop":"14px"}}
                                className="onboarding-info-link"    
                            >D365</Typography>
                        </div>
                    </div>
                    <div className="onboarding-box-list-item">
                        <Box className="onboarding-item-box" bgcolor="primary.main">
                            <img src={links} className="onboarding-box-icon" />
                        </Box>
                        <div className="onboarding-box-list-item-info">
                            <Typography variant="caption" style={{fontWeight: "bold"}}>Human Capital Information</Typography>
                            <Typography variant="caption">
                                The Human Cpital Page will give you the information you need during your employment...
                            </Typography>
                            <Typography 
                                color="primary" 
                                variant="caption" 
                                style={{fontWeight: "bold", "marginTop":"14px"}}
                                className="onboarding-info-link"    
                            >Human Capital</Typography>
                        </div>
                    </div>
                    <div className="onboarding-box-list-item">
                        <Box className="onboarding-item-box" bgcolor="primary.main">
                            <img src={links} className="onboarding-box-icon" />
                        </Box>
                        <div className="onboarding-box-list-item-info">
                            <Typography variant="caption" style={{fontWeight: "bold"}}>Human Capital and Employment Policy</Typography>
                            <Typography variant="caption">
                                This policy encompasses the guidelines which constitute our Human Capital and Employ... 
                            </Typography>
                            <Typography 
                                color="primary" 
                                variant="caption" 
                                style={{fontWeight: "bold", "marginTop":"14px"}}
                                className="onboarding-info-link"    
                            >Human Capital and Employment Policy</Typography>
                        </div>
                    </div>
                </Paper>
            </div>

            {/* BOX2 */}

            <div className="onboarding-item2">
                <Induction />
                <HelpfulContacts />
            </div>
            <div className="onboarding-item3">
                <FromMyManager />
                <GettingStarted />
            </div>
        </div>
    )
}

export default OnboardingBoxContainer
