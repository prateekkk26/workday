import React, { useState, createRef, useContext} from 'react'
import { Link } from 'react-router-dom'
import {
    Paper,
    Typography
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { useDrop } from 'react-dnd'
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

import { AppContext } from '../Box2/Box2'

import settings from '../../../../img/settings.svg'
import themeIcon from '../../../../img/theme.svg'
import company from '../../../../img/company.svg'

import Draggable from 'react-draggable';

import './ThemeSettings.css'

const settingsArray = [
    {
        id: 'title',
        img: themeIcon,
        path: '/settings/theme',
        text: 'Theme and Title'
    }, 
    {
        id: 'company',
        img: company,
        path: '/settings/company-name',
        text: 'Company Name'
    }
]

const ThemeSettings = () => {
    const [arr, setArr] = useState(settingsArray)
    const theme = useTheme()
    const ref = createRef()
    const [settingLength, setSettingLength] = useState(arr.length)
    const {
        applicationArray, 
        filteredArray, 
        dynamicIcons, 
        filteredDynamicIcons,
    } = useContext(AppContext)

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'BOX',
        drop: (item, monitor) => {
            if(item.id === 'expenses' || item.id === 'personalInfo' || item.id === 'opportunityGraph') {
                const droppedElement = dynamicIcons.filter(app => app.id === item.id)[0]
                if(arr.every(a => a.id !== item.id)) {
                    arr.push(droppedElement)
                }
                filteredDynamicIcons(item.id);
                setSettingLength(arr.length)
            } else {
                const droppedElement = applicationArray.filter(app => app.id === item.id)[0]
                if(arr.every(a => a.id !== item.id)) {
                    arr.push(droppedElement)
                }
                filteredArray(item.id)
                setSettingLength(arr.length)
            }
            
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            // canDrop: monitor.canDrop(),
        }),
    }))

    const handleCloseClick = (e) => {
        try {
            let id = e.target.parentNode.id;
            const el = document.getElementById(id).parentElement.parentElement
            el.style.display = "none"
            setSettingLength(settingLength - 1)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <Paper style={{padding: "10px 20px", marginTop: "15px"}}>
            <div style={{display: "flex"}}>
                <img src={settings} alt="Settings" />
                <div style={{"alignSelf": "center", "marginLeft": "6px"}}>
                    <h4>Settings</h4>
                    <p style={{fontSize:"12px", "marginTop": "5px"}}>{settingLength} items</p>
                </div>
            </div>
            
            <div 
                style={{background: isOver ? '#e0e0e0' : '#fff'}}
                ref={drop}
                className="homepage-icon-container"
            >
                {
                    arr.map(setting => {
                        return (                       
                            <div 
                                id={setting.id}
                                className="icon-container"
                            >
                                <div className="icon-overlay">
                                    <EditIcon id={`edit-icon-${setting.id}`} className="icon-overlay-icons" />
                                    <CancelIcon id={`cancel-icon-${setting.id}`} onClick={handleCloseClick} className="icon-overlay-icons" />
                                </div>
                                <Link style={{textDecoration: "none"}} to={setting.path}>
                                    <img src={setting.img} alt={setting.text} className="homepage-icon" />
                                </Link>
                                <p 
                                    style={{
                                        color: theme.palette.text.primary, 
                                        fontWeight: "bold",
                                        fontSize: "12px",
                                    }}
                                    contentEditable
                                    spellCheck = "false"
                                >{setting.text}</p>
                            </div>                 
                        )
                    }) 
                }
            </div>
            
        </Paper>
    )
}

export default ThemeSettings
