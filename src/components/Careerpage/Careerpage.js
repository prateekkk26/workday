import React from 'react'
import {
    Paper,
    Typography,
    Box
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import PageTitle from '../global/PageTitle/PageTitle'
import './Careerpage.css'

const Career = () => {
    return (
        <div>
        <PageTitle title="Career" back />
        <div className="career-main">
            <div className="career-box1">
                <Paper className="career-box1-item1">
                    <Typography>Actions</Typography>
                    <div className="career-item1">
                        <Box className="career-box">
                            <Link to="#" className="career-link">Find Jobs</Link>
                        </Box>
                        <Box className="career-box">
                            <Link to="#" className="career-link">Refer A Candidate</Link>
                        </Box>
                        <Box className="career-box">
                            <Link to="/career/development-plan" className="career-link">Start Development Plan</Link>
                        </Box>
                        <Box className="career-box">
                            <Link to="#" className="career-link">Withdraw Application</Link>
                        </Box>
                    </div>
                </Paper>
                <Paper className="career-box1-item2">
                    <Typography>View</Typography>
                    <div className="career-item2">
                        <Box className="career-box">
                            <Link to="/career/my-mentorship" className="career-link">My Mentorship</Link>
                        </Box>
                        <Box className="career-box">
                            <Link to="/career/my-referrals" className="career-link">My Referrals</Link>
                        </Box>
                        <Box className="career-box">
                            <Link to="/career/competencies" className="career-link">Competencies</Link>
                        </Box>
                        <Box className="career-box">
                            <Link to="/career/certifications" className="career-link">Certifications</Link>
                        </Box>
                        <Box className="career-box">
                            <Link to="/career/education" className="career-link">Education</Link>
                        </Box>
                    </div>
                </Paper>
            </div>
            <div className="career-box2">
                <Paper className="career-box1-item1">
                    <Typography>My Development Plans</Typography>
                    <div className="career-item1">
                        <Box className="career-box">
                            <Link to="#" className="career-link">Individual Development Plan: 2020/03/01-2021/02/28</Link>
                        </Box>
                    </div>
                </Paper>
            </div>
        </div>
        </div>
    )
}

export default Career
