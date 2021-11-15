import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'

import gear from '../../../../img/gear.svg'
import './HomepageHeader.css'

const HomepageHeader = () => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (!localStorage.title) {
            localStorage.setItem('title', "Brian Kaplan")
        } else {
            let temp = localStorage.getItem('title')
            setTitle(temp)
        }
    }, [title])

    return (
        <Paper className="homepageHeaderContainer">
            <h3 id="homepage-header-title">Welcome, {title}</h3>
            <img src={gear} />
        </Paper>
    )
}

export default HomepageHeader;
