import React from 'react'
import HomepageHeader from './components/HomepageHeader/HomepageHeader'
import Box1 from './components/Box1/Box1'
import Box2 from './components/Box2/Box2'

import './Homepage.css'

const Homepage = (props) => {

    return (
        <div style={{position: "relative"}}>
            <div id="homepage-background"></div>
            <div className="homepage-box-container">
                <HomepageHeader />
                <div className="homepage-boxes">
                    <Box1 />
                    <Box2 />
                </div>
            </div>
        </div>
    )
}

export default Homepage
