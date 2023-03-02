import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'

function App() {
  const DisplayLogin = () => {
    document.getElementById('nav-login').style.display='block';
    document.getElementById('nav-signUp').style.display='none';
  };
  const DisplaySignUp = () => {
    document.getElementById('nav-signUp').style.display='block';
    document.getElementById('nav-login').style.display='none';
  };
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'} style={{color:'#ffffff'}}>
              SlackAttack News
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" id='nav-login' style={{display: 'none'}}>
                  <Link className="nav-link" to={'/sign-in'} style={{color:'#ffffff'}} onClick={DisplaySignUp}>
                    Login
                  </Link>
                </li>
                <li className="nav-item" id='nav-signUp'>
                  <Link className="nav-link" to={'/sign-up'} style={{color:'#ffffff'}} onClick={DisplayLogin}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App