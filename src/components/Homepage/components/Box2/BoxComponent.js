import React from 'react'
import { Link } from 'react-router-dom'
import { Paper, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import { useDrag } from 'react-dnd'

import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

const BoxComponent = React.forwardRef(({id, app, handleEditClick, appLength, setAppLength}, ref) => {
    const theme = useTheme()

    const [{ isDragging, opacity }, drag, dragPreview] = useDrag(() => ({
        type: 'BOX',
        item: () => ({
            id: id
        }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            opacity: monitor.isDragging() ? 0.4 : 1,
        })
    }))

    const handleCloseClick = (e) => {
        try {
            let id = e.target.parentNode.id;
            const el = document.getElementById(id).parentElement.parentElement
            el.style.display = "none"
            setAppLength(appLength - 1)
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div 
            id={id}
            className="icon-container"
            ref={drag}
        >
            <div className="icon-overlay">
                <EditIcon id={`edit-icon-${id}`} onClick={handleEditClick} className="icon-overlay-icons" />
                <CancelIcon id={`cancel-icon-${id}`} onClick={handleCloseClick} className="icon-overlay-icons" />
            </div>
            <Link style={{textDecoration: "none"}} to={app.path}>
                <img src={app.img} alt={app.text} className="homepage-icon" />
            </Link>
            <p 
                style={{
                    color: theme.palette.text.primary, 
                    fontWeight: "bold",
                    fontSize: "12px",
                }}
                contentEditable
                spellCheck = "false"
            >{app.text}</p>
        </div>
        // <Link key={app.id} ref={drag} to={app.path} className="icon-container">
        //     <img src={app.img} alt={app.text} className="homepage-icon" />
        //     <Typography variant="caption" style={{color: theme.palette.text.primary, fontWeight: "bold"}}>{app.text}</Typography>
        // </Link>
    )
})

export default BoxComponent
