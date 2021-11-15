import React from 'react'
import {
    Box,
    Paper,
    Typography
} from '@material-ui/core'

import {
    BrandingWatermark,
    Group,
    Timeline,
    EmojiPeople,
    Favorite
} from '@material-ui/icons'

import health from '../../../../img/health.svg'
import group from '../../../../img/group.svg'
import links from '../../../../img/links.svg'
import book from '../../../../img/book.svg'
import stand from '../../../../img/stand.svg'
import workdayAssistant from '../../../../img/workdayAssistant.svg'

const Induction = () => {
    return (
        <Paper className="onboarding-item">
            <Typography variant="h7" style={{fontWeight: "bold"}}>Induction</Typography>
            <div className="onboarding-box-list-item">
                <Box className="onboarding-item-box" bgcolor="primary.main">
                    {/* <BrandingWatermark className="onboarding-box-icon" /> */}
                    <img src={workdayAssistant} className="onboarding-box-icon" />
                </Box>
                <div className="onboarding-box-list-item-info">
                    <Typography variant="caption" style={{fontWeight: "bold"}}>Who We Are</Typography>
                    <Typography variant="caption">
                        As a listed company, we are invested in telecommunications and information technology...
                    </Typography>
                </div>
            </div>
            <div className="onboarding-box-list-item">
                <Box className="onboarding-item-box" bgcolor="primary.main">
                    {/* <Group className="onboarding-box-icon" /> */}
                    <img src={group} className="onboarding-box-icon" />
                </Box>
                <div className="onboarding-box-list-item-info">
                    <Typography variant="caption" style={{fontWeight: "bold"}}>Our Leadership Team</Typography>
                    <Typography variant="caption">
                        
                    </Typography>
                    <Typography 
                        color="primary" 
                        variant="caption" 
                        style={{fontWeight: "bold", "marginTop":"14px"}}
                        className="onboarding-info-link"    
                    >Our Leadership Team</Typography>
                </div>
            </div>
            <div className="onboarding-box-list-item">
                <Box className="onboarding-item-box" bgcolor="primary.main">
                    {/* <Timeline className="onboarding-box-icon" /> */}
                    <img src={book} className="onboarding-box-icon" />
                </Box>
                <div className="onboarding-box-list-item-info">
                    <Typography variant="caption" style={{fontWeight: "bold"}}>Our Story</Typography>
                    <Typography variant="caption">
                        Our corporate roots, planted in 1965, have spread, and we now have direct presences in S...
                    </Typography>
                </div>
            </div>
            <div className="onboarding-box-list-item">
                <Box className="onboarding-item-box" bgcolor="primary.main">
                    {/* <EmojiPeople className="onboarding-box-icon" /> */}
                    <img src={stand} className="onboarding-box-icon" />
                </Box>
                <div className="onboarding-box-list-item-info">
                    <Typography variant="caption" style={{fontWeight: "bold"}}>What We Stand For</Typography>
                    <Typography variant="caption">
                        Our vision to be the leading technology solution provider in our chosen operational secto...
                    </Typography>
                </div>
            </div>
            <div className="onboarding-box-list-item">
                <Box className="onboarding-item-box" bgcolor="primary.main">
                    {/* <Favorite className="onboarding-box-icon" /> */}
                    <img src={health} className="onboarding-box-icon" />
                </Box>
                <div className="onboarding-box-list-item-info">
                    <Typography variant="caption" style={{fontWeight: "bold"}}>There Where It Matters</Typography>
                    <Typography variant="caption">
                        We believe in doing good business while doing good. According, we aim always to live o...
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default Induction
