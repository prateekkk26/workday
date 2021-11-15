/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {
    Box,
    Paper,
    Typography,
    Button
} from '@material-ui/core'
import MessageIcon from '@material-ui/icons/Message';
import OnboardingBoxContainer from './components/OnboardingBoxContainer/OnboardingBoxContainer'
import PageTitle from '../global/PageTitle/PageTitle'


import './OnBoardingpage.css'

const OnBoardingpage = () => {
    return (
        <div>
            <PageTitle title="Onboarding" back />
            <div className="onboarding-main">
                <Box className="onboarding-header" color="white" bgcolor="primary.main">
                    <Paper style={{width: "49%", display: "flex", "flexDirection": "column"}}>
                        <div className="onboarding-header1">
                            <img 
                                src="https://www.saprofessionals.com/wp-content/uploads/2019/10/Mteto-Nyati-Altron-Group-CE.jpg" 
                                className="onboarding-header-img"
                            />
                            <div className="onboarding-header1-info">
                                <Typography variant="h6" style={{fontWeight: "bold"}}>Message from our Group Executive: Mteto Nyati</Typography>
                                <Typography variant="caption">
                                    Welcome to Workday, I wish you all the success in your career with Workday and than you
                                    for the contribution that you will make in your new role, to our strategic objectives.
                                </Typography>
                            </div>
                        </div>
                        <Typography color="primary" style={{textAlign: "center", marginTop: "auto"}}>View More</Typography>
                    </Paper>
                    <Paper style={{width: "49%", display:"flex", "flexDirection": "column", "alignContent":"space-between"}}>
                        <div className="onboarding-header2">
                            <MessageIcon color="primary" style={{fontSize: "40px"}} />
                            <div className="onboarding-header2-info">
                                <Typography variant="h6" style={{fontWeight: "bold"}}>Message from Human Capital</Typography>
                                <Typography variant="caption">
                                    Our Employees are at the center of what we do."Working for Workday could be the best decision
                                    of your life. You get the opportunity to do work that is fulfilling and has an impact to our
                                    country, you work for a bigger purpose."
                                </Typography>
                            </div>
                        </div>
                        <Typography color="primary" style={{textAlign: "center"}}>View More</Typography>
                    </Paper>
                </Box>
                <OnboardingBoxContainer />
            </div>
        </div>
    )
}

export default OnBoardingpage
