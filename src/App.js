import React, { useState, useEffect, createContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'

import Paypage from './components/Paypage/Paypage'
import Payslips from './components/Paypage/components/Payslips/Payslips'
import CompensationReview from './components/Paypage/components/CompensationReview/CompensationReview'
import BonusAndPaymentHistory from './components/Paypage/components/BonusAndPaymentHistory/BonusAndPaymentHistory'
import TaxDocument from './components/Paypage/components/TaxDocument/TaxDocument'

import Careerpage from './components/Careerpage/Careerpage'
import DevelopmentPlan from './components/Careerpage/components/DevelopmentPlan/DevelopmentPlan'
import Education from './components/Careerpage/components/Education/Education'
import Certifications from './components/Careerpage/components/Certifications/Certifications'
import Competencies from './components/Careerpage/components/Competencies/Competencies'
import Referrals from './components/Careerpage/components/Referrals/Referrals'
import Mentorship from './components/Careerpage/components/Mentorship/Mentorship'

import OnBoardingpage from './components/OnBoardingpage/OnBoardingpage'

import Settingspage from './components/Settingspage/Settingspage'
import CompanyNameSettings from './components/CompanyNameSettings/CompanyNameSettings'

import Absencepage from './components/Absencepage/Absencepage'
import RequestAbsence from './components/Absencepage/components/RequestAbsence.js/RequestAbsence'

import Benefitspage from './components/Benefitspage/Benefitspage'
import ChangeBenefits from './components/Benefitspage/components/ChangeBenefits/ChangeBenefits'
import BenefitElections from './components/Benefitspage/components/BenefitElections/BenefitElections'

import './App.css';

export const Context =  createContext()

const App = () => {
  const history = useHistory()
  const [dark, setDark] = useState(false)
  const [color, setColor] = useState('')

  let theme = createMuiTheme({
    palette: {
        type: dark ? 'dark' : 'light',
        primary: {
          // main: color ? color : "#0B77E3",
          main: '#095eb2'
        },
        secondary: {
          main: '#ff9800'
        }
    },
  })


  useEffect(() => {
    if(!localStorage.themeColor) {
      localStorage.setItem('themeColor', '#0B77E3')
    } else {
      let temp = localStorage.getItem('themeColor')
      setColor(temp)
    }

    if(!localStorage.company) {
      localStorage.setItem('company', 'Altron')
    }

    // if(!localStorage.dark) {
    //   localStorage.setItem('dark', false)
    // } else {
    //   let temp = localStorage.getItem('dark')
    //   setDark(temp)
    // }
  }, [])

  useEffect(() => {
    const el = document.body.style
    const pathArray = ['/', '/pay', '/benefits', '/career', '/absence']
    if(pathArray.includes(window.location.pathname)) {
      el.background = "#e8ebed"
    } else {
      el.background = "#FAF9F6"
    }
    return history.listen((location) => { 
      if(pathArray.includes(location.pathname)) {
        el.background = "#e8ebed"
      } else {
        el.background = "#FAF9F6"
      }
   }) 
  }, [history])


  // useEffect(() => {
  //   const el = document.body.style

  //   if (dark) {
  //     // el.background = "#222831"
  //     el.background = '#28282B'
  //   } else {
  //     // el.background = "#EDF5E1"
  //     // el.background = '#8c92ac'
  //     el.background = '#FAF9F6'
  //   }
  // }, [dark, theme,])

  const StyledPaper = withStyles({
    root: {
      // background: dark ? '#222831' : '#EDF5E1',
      boxShadow: 'none',
      borderRadius: "0 !important"
    },
})(Paper);

  const handleColorChange = (color) => {
    setColor(color)
    localStorage.setItem('themeColor', color)
  }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">

        <Navbar dark={dark} setDark={setDark} />
        <Context.Provider value={{ handleColorChange }}>
        <Switch>
          <Route exact path="/pay" component={Paypage} />
          <Route exact path="/pay/payslips" component={Payslips} />
          <Route exact path="/pay/compensation" component={CompensationReview} />
          <Route exact path="/pay/bonus-and-one-time-payment-history" component={BonusAndPaymentHistory} />
          <Route exact path="/pay/tax-document" component={TaxDocument} />
          <Route exact path="/career" component={Careerpage} />
          <Route exact path="/career/development-plan" component={DevelopmentPlan} />
          <Route exact path="/career/competencies" component={Competencies} />
          <Route exact path="/career/education" component={Education} />
          <Route exact path="/career/my-referrals" component={Referrals} />
          <Route exact path="/career/my-mentorship" component={Mentorship} />
          <Route exact path="/career/certifications" component={Certifications} />
          <Route exact path="/onboarding" component={OnBoardingpage} />
          <Route exact path="/settings/theme" component={Settingspage} />
          <Route exact path="/settings/company-name" component={CompanyNameSettings} />
          <Route exact path="/absence" component={Absencepage} />
          <Route exact path="/request-absence" component={RequestAbsence} />
          <Route exact path="/benefits" component={Benefitspage} />
          <Route exact path="/benefits/change-benefits" component={ChangeBenefits} />
          <Route exact path="/benefits/benefit-elections" component={BenefitElections} />
          <Route exact path="/" component={Homepage} />
        </Switch>
        </Context.Provider>
        {/* <Footer /> */}
     
    </div>
    </ThemeProvider>
  );
}

export default App;
