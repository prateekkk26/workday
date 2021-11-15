import React from 'react'
import { Paper } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

import './Footer.css'

const Footer = (props) => {
    const location = useLocation()
    return (
        <footer className={`${location.pathname === '/' ? "footer" : "footer2"}`}>
            <div className="footer-header">
                <div className="hr"></div>
                <div style={{margin: "0 20px"}}>
                    <img src="https://www.ziplyne.com/static/media/logonoword.3a8992f0.png" className="footer-logo" />
                </div>
                <div className="hr"></div>
            </div>
            <p>&copy; 2021 Ziplyne Inc. All rights reserved.</p>
        </footer>
    )
}

export default Footer
