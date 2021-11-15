import React from 'react'
import {useHistory} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useTheme } from '@material-ui/core/styles'

import './PageTitle.css'

const PageTitle = ({title, back}) => {
    const history = useHistory()
    const theme = useTheme()
    return (
        <div className="page-title-container" style={{background: theme.palette.primary.main}}>
            {
                back && <ArrowBackIcon className="arrow-icon" onClick={() => history.push('/')} />
            }
            <h2>{title}</h2>
        </div>
    )
}

export default PageTitle
