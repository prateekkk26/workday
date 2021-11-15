import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../../App'
import {
    Typography,
    Modal,
    Backdrop,
    Fade,
    TextField,
    Button
} from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import { colorCodes } from '../../data/colorCodes'
import './Settingspage.css'
import { SettingsInputAntennaTwoTone } from '@material-ui/icons'
import PageTitle from '../global/PageTitle/PageTitle'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: "400px",
      height: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "25px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[6],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Settingspage = () => {
    const history = useHistory()
    const theme = useTheme()
    const colorObject = useContext(Context)
    const classes = useStyles();
    const [modalTitle, setModalTitle] = useState('')
    const [modalText, setModalText] = useState('')
    const [color, setColor] = useState('')
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('')

    useEffect(() => {
        let temp = localStorage.getItem('title')
        setTitle(temp)
    }, [])



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
        <PageTitle title="Theme Settings" back />
        <div className="settings-main">
            <div>
            <Typography variant="h5">Color Picker</Typography>
                <div className="color-container">
                    {Object.keys(colorCodes).map(function(color, key) {
                        return (
                            <div 
                                key={key} 
                                style={{background: colorCodes[color]}} 
                                className="color-container-item"
                                onClick={() => {
                                    colorObject.handleColorChange(colorCodes[color])
                                    setColor(color)
                                    setModalTitle('Theme')
                                    setModalText(`Theme changed to ${color}`)
                                    setOpen(true)
                                }}    
                            >
                                <p style={{color: "black"}}>{color}</p>
                            </div>
                        )
                    })}
                    
                </div>
            </div>

            <div>
                <Typography variant="h5">Title</Typography>
                <TextField
                    id="filled-full-width"
                    label="Title"
                    style={{ margin: 8 }}
                    placeholder={title}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={title}
                    variant="filled"
                    onChange={handleChange}
                />
            </div>
            
            {
                open && <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{modalTitle}</h2>
                        <p id="transition-modal-description" style={{color: theme.palette.primary.main, textAlign: "center", fontWeight: "bold"}}>{modalText}</p>
                    </div>
                    </Fade>
                </Modal>
            }
        </div>
        <div className="change-benefits-btn-container">
            <Button 
                variant="contained" 
                color="secondary" 
                className="change-benefits-btn1"
                onClick={() => {
                    localStorage.setItem('title', title)
                    setModalTitle('Title')
                    setModalText(`Title changed to ${title}`)
                    setOpen(true)
                }}
            >Change</Button>
            <Button 
                variant="contained" 
                className="change-benefits-btn2"
                onClick={() => history.push('/')}
            >Cancel</Button>
        </div>
        </div>
    )
}

export default Settingspage
