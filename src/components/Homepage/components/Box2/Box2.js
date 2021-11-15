import React, { useState, useEffect, createContext } from 'react'
import { Link } from 'react-router-dom'
import { useDrag } from 'react-dnd'
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import MapIcon from '@material-ui/icons/Map';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SecurityIcon from '@material-ui/icons/Security';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import { 
    Paper, 
    Typography, 
    TextField, 
    Button, 
    Dialog,
    IconButton
} from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles, useTheme } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';


import ThemeSettings from '../ThemeSettings/ThemeSettings'

import applications from '../../../../img/applications.svg'
import pay from '../../../../img/pay.svg'
import career from '../../../../img/career.svg'
import onboarding from '../../../../img/onboarding.svg'
import absence from '../../../../img/absence.svg'
import benefits from '../../../../img/benefits.svg'
import talentAndPerformance from '../../../../img/talentAndPerformance.svg'
import expenses from '../../../../img/expenses.svg'
import personalInfo from '../../../../img/personalInfo.svg'
import opportunityGraph from '../../../../img/opportunityGraph.svg'
import BoxComponent from './BoxComponent';
import DynamicIconComponent from './DynamicIconComponent';

import CloseIcon from '@material-ui/icons/Close';

import './Box2.css'

let applicationArray = [
    {
        id: 'career',
        img: career,
        path: '/career',
        text: 'Career'
    },
    {
        id: 'onboarding',
        img: onboarding,
        path: '/onboarding',
        text: 'Onboarding'
    },
    {
        id: 'absence',
        img: absence,
        path: '/absence',
        text: 'Absence'
    },
    {
        id: 'benefits',
        img: benefits,
        path: '/benefits',
        text: 'Benefits'
    },
    {
        id: 'talent-and-performance',
        img: talentAndPerformance,
        path: '/',
        text: 'Talent and Performance'
    }

]

const dynamicIcons = [
    {
        count: 0,
        id: 'expenses',
        img: expenses,
        path: '/',
        text: 'Expenses'
    },
    {   
        count: 1,
        id: 'personalInfo',
        img: personalInfo,
        path: '/',
        text: 'Personal Information'
    },
    {
        count: 2,
        id: 'opportunityGraph',
        img: opportunityGraph,
        path: '/',
        text: 'Opportunity Graph'
    }
]

export const AppContext = createContext()

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      width: "500px"
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  const appIdArray = []
  const dynamicIdArray = []

const Box2 = () => {
    const theme = useTheme()
    const [appLength, setAppLength] = useState(applicationArray.length)
    const [count, setCount] = useState(0)
    const [countLength, setCountLength] = useState(0)
    const [arr, setArr] = useState(applicationArray)
    const [dynamicArr, setDynamicArr] = useState(dynamicIcons)
    const [input, setInput] = useState('')

    const boxRef = React.createRef()

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setInput("")
    setOpen(false);
  };

  const handleChanges = () => {
    if (input !== "") {
        boxRef.current.className = input
    }
    setOpen(false);
  }

    const filteredArray = (id) => {
        appIdArray.push(id);
        let filtered = arr.filter(a => !(appIdArray.includes(a.id)))
        setArr(filtered)
        setAppLength(filtered.length)
    }

    const filteredDynamicIcons = (id) => {
        dynamicIdArray.push(id);
        let filtered = dynamicArr.filter(a => !(dynamicIdArray.includes(a.id)));
        setDynamicArr(filtered)
        setCountLength(countLength)
    }

    const handleCloseClick = (e) => {
        try {
            let id = e.target.parentNode.id;
            const el = document.getElementById(id).parentElement.parentElement
            el.style.display = "none"
        } catch (err) {
            console.log(err)
        }
    }

    const handleEditClick = (e) => {
        try {
            // let id = e.target.id;
            // const el = document.getElementById(id).parentElement.parentElement
            // const child = el.querySelectorAll("p")[0]
            setOpen(!open)
            // console.log(boxRef.current.id)
            // boxRef.current.classList.remove(boxRef.current.className);
        } catch (err) {
            console.log(err)
        }
    }
        return (
            <AppContext.Provider value={{
                    applicationArray: arr, 
                    filteredArray, 
                    filteredDynamicIcons,
                    dynamicIcons: dynamicArr,
                }}>
                <div className="box2-main">
                    <Paper className="box2-main-item">
                        <div style={{display: "flex"}}>
                            <img src={applications} alt="Applications" />
                            <div style={{"alignSelf": "center", "marginLeft": "6px"}}>
                                <h4>Applications</h4>
                                <p style={{fontSize:"12px", "marginTop": "5px", background: "#fff"}}>{appLength + 1 + countLength} items</p>
                            </div>
                            <AddCircleIcon  
                                style={{
                                    color: theme.palette.primary.main,
                                    alignSelf: "center",
                                    marginLeft: "auto",
                                    fontSize: "35px",
                                    cursor: "pointer"
                                }}
                                onClick={() => {setCount(count + 1); setCountLength(countLength + 1 )}}
                            />
                        </div>
                        <div className="homepage-icon-container">
                            <div 
                                id='pay'
                                className="icon-container"
                                ref={boxRef}
                            >
                                <div className="icon-overlay">
                                    <EditIcon id={`edit-icon-1`} onClick={handleEditClick} className="icon-overlay-icons" />
                                    <CancelIcon id={`cancel-icon-1`} onClick={handleCloseClick} className="icon-overlay-icons" />
                                </div>
                                <Link style={{textDecoration: "none"}} to="/pay">
                                    <img src={pay} alt='Pay' className="homepage-icon" />
                                </Link>
                                <p 
                                    style={{
                                        color: theme.palette.text.primary, 
                                        fontWeight: "bold",
                                        fontSize: "12px",
                                    }}
                                    contentEditable
                                    spellCheck = "false"
                                >Pay</p>
                            </div>
                            {
                                arr.map(app => {
                                    return <BoxComponent 
                                        key={app.id} 
                                        app={app} 
                                        id={app.id} 
                                        handleEditClick
                                        ref={boxRef}
                                        appLength={appLength}
                                        setAppLength={setAppLength}
                                    />
                                })
                            }
                            {
                                dynamicArr.map(app => {
                                    return <DynamicIconComponent 
                                        key={app.id}  
                                        app={app}
                                        id={app.id}
                                        handleEditClick
                                        count={count}
                                        countLength={countLength}
                                        setCountLength={setCountLength}
                                        ref={boxRef}
                                    />
                                })
                            }

                        </div>
                    </Paper>
                    <ThemeSettings />
                </div>
                <Dialog 
                    className={styles.root} 
                    onClose={handleClose} 
                    aria-labelledby="customized-dialog-title" 
                    open={open}
                    disableEnforceFocus
                >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add a ClassName
                    </DialogTitle>
                    <DialogContent dividers>
                    <TextField 
                        id="outlined-basic" 
                        label="ClassName" 
                        variant="outlined" 
                        fullWidth
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={handleChanges} color="primary">
                        Save changes
                    </Button>
                    </DialogActions>
                </Dialog>
            </AppContext.Provider>
        )
}

export default Box2
