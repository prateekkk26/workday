import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
    Typography,
    TextField,
    Button,
    Modal,
    Backdrop,
    Fade,
} from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import PageTitle from '../global/PageTitle/PageTitle'

import './CompanyNameSettings.css'

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

const CompanyNameSettings = () => {
    const classes = useStyles();
    const history = useHistory()
    const theme = useTheme()
    const [company, setCompany] = useState('')
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let temp = localStorage.getItem('company')
        setCompany(temp)
    }, [])

    const handleChange = (e) => {
        setCompany(e.target.value)
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <PageTitle title="Company Name Settings" back />
            <div className="settings-main" style={{height: "60vh"}}>
                <div>
                    <Typography variant="h5">Company Name</Typography>
                    <TextField
                        id="filled-full-width"
                        label="Title"
                        style={{ margin: 8 }}
                        placeholder={company}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={company}
                        variant="filled"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="change-benefits-btn-container">
                <Button 
                    variant="contained" 
                    color="secondary" 
                    className="change-benefits-btn1"
                    onClick={() => {
                        localStorage.setItem('company', company)
                        setOpen(true)
                    }}
                >Change</Button>
                <Button 
                    variant="contained" 
                    className="change-benefits-btn2"
                    onClick={() => history.push('/')}
                >Cancel</Button>
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
                        <h2 id="transition-modal-title">Company Name</h2>
                        <p id="transition-modal-description" style={{color: theme.palette.primary.main, textAlign: "center", fontWeight: "bold"}}>
                            Company name changed to {company}
                        </p>
                    </div>
                    </Fade>
                </Modal>
            }
        </div>
    )
}

export default CompanyNameSettings
