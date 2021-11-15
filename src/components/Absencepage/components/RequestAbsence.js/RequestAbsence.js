import React from 'react'
import moment from 'moment'
import { Typography, TextField, InputAdornment, Button } from '@material-ui/core'
import DehazeIcon from '@material-ui/icons/Dehaze';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageTitle from '../../../global/PageTitle/PageTitle'
import Balances from './Balances'
import RequestNext from './RequestNext'
import './RequestAbsence.css'
import { ThreeSixty } from '@material-ui/icons';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

class RequestAbsence extends React.Component {
    constructor(props) {
        super(props)
        this.width = props.width || "100%";
        this.style = props.style || {
            position: 'relative',
            margin: '50px auto'
        };
    }

    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        modalOpen: false,
        next: false,
        typeList: false,
        typeArray: [
            'Additional Sick Leave',
            'Annual Leave S.A (Days)',
            'Sick Leave S.A (Days)',
            'Overtime Leave'
        ],
        selectedTypes: []
    }

    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.months()

    handleModalOpen = () => {
        this.setState({
            modalOpen: true
        })
      };
    
    handleModalClose = () => {
        this.setState({
            modalOpen: false
        })
    };

    year = () => {
        return this.state.dateContext.format('Y')
    }
    month = () => {
        return this.state.dateContext.format('MMMM')
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth()
    }
    currentDate = () => {
        return this.state.dateContext.get('date')
    }
    currentDay = () => {
        return this.state.dateContext.format('D')
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month)
        let dateContext = Object.assign({}, this.state.dateContext)
        dateContext = moment(dateContext).set("month", monthNo)
        this.setState({
            dateContext: dateContext
        })
    }

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext)
        dateContext = moment(dateContext).add(1, "month")
        this.setState({
            dateContext: dateContext
        })
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext)
        dateContext = moment(dateContext).subtract(1, "month")
        this.setState({
            dateContext: dateContext
        })
    }

    onSelectChange = (e, data) => {
        this.setMonth(data)
    }

    SelectList = (props) => {
        let popup = props.data.map(data => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e) => {
                        this.onSelectChange(e, data)
                    }}>{data}</a>
                </div>
            )
        })
        return (
            <div className="month-popup">
                {popup}
            </div>
        )
    }

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        })
    }

    MonthNav = () => {
        return (
            <span className="label-month"
                // onClick={(e) => this.onChangeMonth(e, this.month())}
            >
                {this.month()}
                {this.state.showMonthPopup && <this.SelectList data={this.months} />}
            </span>
        )
    }

    showYearEditor = (e) => {
        this.setState({
            showYearNav: true
        })
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext)
        dateContext = moment(dateContext).set("year", year)
        this.setState({
            dateContext: dateContext
        })
    }

    onYearChange = (e) => {
        this.setYear(e.target.value)
    }

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value)
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav= () => {
        return (
                this.state.showYearNav ? 
                <input 
                    defaultValue={this.year()}
                    className="editor-year"
                    ref={(yearInput) => this.yearInput = yearInput}
                    onKeyUp={(e) => this.onKeyUpYear(e)}
                    onChange={(e) => this.onYearChange(e)}
                    type="number"
                    placeholder="year"
                /> :
                <span 
                className="label-year" 
                onDoubleClick={(e) => this.showYearEditor(e)}
                >
                    {this.year()}
                </span>

        )
    }

    onDayClick = (e, day) => {
        alert(day)
    }

    handleTypeClick = () => {
        this.setState({
            typeList: !this.state.typeList
        })
    }   

    handleSelectedType = (e) => {
        let typeArray = this.state.selectedTypes
        if(!typeArray.includes(e.target.innerText)) {
            typeArray.push(e.target.innerText)
        }
        this.setState({
            selectedTypes: typeArray,
            typeList: !this.state.typeList
        })
    }

    handleDeleteType = (e) => {
        let typeArray = this.state.selectedTypes
        let filteredTypeArray = typeArray.filter(type => !(type == e.target.value))
        this.setState({
            selectedTypes: filteredTypeArray
        })
    }

    render() {
        let weekdays = this.weekdays.map(day => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        })

        let blanks = []
        for(let i=0; i<this.firstDayOfMonth(); i++) {
            blanks.push(
                <td key={i*80} className="emptySlot">
                    {""}
                </td>
            )
        }

        let daysInMonth = [];
        for(let d=1; d<=this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day" : "day")
            daysInMonth.push(
                <td key={d} className={className}>
                    <span onClick={(e) => this.onDayClick(e, d)}>{d}</span>
                </td>
            )
        }
        
        let totalSlots = [...blanks, ...daysInMonth]
        let rows = []
        let cells = []

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row)
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow)
                cells = []
                cells.push(row)
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow)
            }
        })

        let trElems = rows.map((d, i) => {
            return (
                <tr key={i*100}>
                    {d}
                </tr>
            )
        })

        let displayYearList = () => {
            let options = []
            for(let i=1900; i<=2050; i++) {
                options.push(i)
            }
            return options
        }


        return (
            <div>
                <PageTitle title="Absence Calendar" />
                {!this.state.next && <div className="requestAbsence-main">
                    <Typography variant="caption">Click and drag on the calendar or select data range</Typography>
                    <div className="requestAbsence-btn-container">
                        <a href='#' className="requestAbsence-btn1" onClick={this.handleModalOpen}>Select Date Range</a>
                        <a href="#" className="requestAbsence-btn2">View Teams</a>
                    </div>
                    <div className="request-absence-flex-container">
                        <div className="request-absence-item1">
                            <Balances />
                        </div>
                        <div className="request-absence-calendar">
                            <div className="table-header-container">
                                <p onClick={(e) => this.prevMonth()} className="table-arrow">{"<"}</p>
                                <p onClick={(e) => this.nextMonth()} className="table-arrow">{">"}</p>
                                <h4><this.MonthNav /></h4>
                                <h4><this.YearNav /></h4>
                                {/* <ExpandMoreIcon 
                                    className="table-expand-icon" 
                                    onClick={() => <displayYearList />}
                                /> */}
                                <select 
                                    name="years" 
                                    id="years" 
                                    className="table-year-list"
                                    onChange={(e) => this.setYear(e.target.value)} 
                                >
                                    {
                                        displayYearList().map(option => {
                                            if(option == this.year()) {
                                                return <option selected="selected">{option}</option>
                                            }
                                            return <option
                                                key={option} 
                                                value={option}   
                                            >{option}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <table className="calendar-main" cellSpacing="0">
                                <tbody>
                                    <tr className='table-weekdays'>{weekdays}</tr>
                                    {trElems}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                }
                {
                    this.state.next && <RequestNext />
                }
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    disableEnforceFocus
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: "5px !important"
                    }}
                    open={this.state.modalOpen}
                    onClose={this.handleModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={this.state.modalOpen} style={{borderRadius: "5px !important"}}>
                    <div style={{
                        background: "white",
                        padding: "10px 10px 10px 15px",
                        width: "300px",
                        color: "black",
                        borderRadius: "5px !important"
                    }}>
                        <p style={{textAlign: "right", cursor: "pointer", fontSize:"20px"}} onClick={this.handleModalClose}>{"x"}</p>
                        <h3 style={{paddingBottom: "15px", marginBottom: "20px",borderBottom: "1px solid #c0c0c0"}}>Select Date Range</h3>
                        <div className="absence-date">
                            <Typography variant="caption" style={{alignSelf: "center", width: "20%"}}>From</Typography>
                            <form noValidate style={{margin: "0 auto", color: "black !important", display: "flex", width: "80%"}}>
                                <span className="mandatory">*</span>
                                <TextField
                                    id="date"
                                    type="date"
                                    style={{padding: "10px", color: "black"}}
                                    defaultValue="YYYY/MM/DD"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </form>
                        </div>
                        <div className="absence-date">
                            <Typography variant="caption" style={{alignSelf: "center", width: "20%"}}>To</Typography>
                            <form noValidate style={{display: "flex", margin: "0 auto", width:"80%"}}>
                                <span className="mandatory">*</span>
                                <TextField
                                    id="date"
                                    type="date"
                                    style={{padding: "10px"}}
                                    defaultValue="YYYY/MM/DD"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </form>
                        </div>
                        <div className="absence-date">
                            <Typography variant="caption" style={{alignSelf: "center", width: "20%"}}>Type</Typography>
                            <div style={{
                                margin: "0 auto",
                                height: "auto",
                                display: "flex",
                                width: "80%",
                            }}>
                                <span className="mandatory">*</span>
                                <div style={{
                                    width: "100%",
                                    marginLeft: "10px",
                                    borderRadius: "5px",
                                    border: "1px solid #C0C0C0",
                                    position: "relative",
                                    alignItems: "center"
                                }}>
                                    <div style={{
                                        width: "100%",   
                                        display: "flex", 
                                        alignItems: "center"
                                    }}>
                                        {
                                            this.state.typeList && <div className="absence-type-dropdown">
                                                {this.state.typeArray.map((type, key) => {
                                                    return <div key={key}className="absence-type-list-item">
                                                        <p style={{width: "100%"}} onClick={this.handleSelectedType}>{type}</p>
                                                    </div>
                                                })}
                                            </div>
                                        }
                                        <div className="absence-type-search-container"></div>
                                        <DehazeIcon onClick={this.handleTypeClick} style={{cursor: "pointer"}} />
                                    </div>
                                    <div style={{padding: "10px", display: "flex", "flexWrap": "wrap", fontSize: "12px", fontWeight: "bold"}}>
                                    {
                                        this.state.selectedTypes.map((type, key) => {
                                            return <div key={key} style={{
                                                width: "100%", 
                                                display: "flex", 
                                                background:"#ebe8e8",
                                                padding: "5px",
                                                marginBottom: "7px"
                                            }}>
                                                <button value={type} style={{
                                                    width: "15%", 
                                                    cursor: "pointer",
                                                    border: "none",
                                                    background: "transparent"
                                                }} onClick={this.handleDeleteType}>x</button>
                                                <p style={{width:"85%"}}>{type}</p>
                                            </div>
                                        })    
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            margin: "0 auto", 
                            marginTop: "10px", 
                            padding: "10px",
                            display: "flex",
                            "justifyContent": "center",
                            "alignItems": "center"
                        }} className="change-benefits-btn-container">
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                className="change-benefits-btn1"
                                onClick={() => {
                                    this.setState({
                                        modalOpen: false,
                                        next: true
                                    })
                                }}
                            >Next</Button>
                            <Button 
                                variant="contained" 
                                className="change-benefits-btn2"
                                onClick={this.handleModalClose}    
                            >Cancel</Button>
                        </div>
                    </div>
                    </Fade>
                </Modal>
                {
                  !this.state.next &&  <div className="change-benefits-btn-container">
                        <Button variant="contained" color="secondary" className="change-benefits-btn1">Request Absence</Button>
                    </div>
                }
            </div>
        )
    }
}

export default RequestAbsence
