import React, { useState }  from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import axios from 'axios'
import Login from './components/Login'
import SignUp from './components/Signup'
import LandingPage from './components/LandingPage'

// const BackButtonListener = ({ children }) => {
//   const [pressed, setPressed] = React.useState(false)
//   const history = useHistory()
//   React.useEffect(() => {
//     window.onpopstate = function(event) {
//       history.go(1);
//     };
//   });

// };

function App() {
  
  const DisplayLogin = () => {
    document.getElementById('nav-login').style.display='block';
    document.getElementById('nav-signUp').style.display='none';
    document.getElementById('nav-logout').style.display='none';
  };
  const DisplaySignUp = () => {
    document.getElementById('nav-signUp').style.display='block';
    document.getElementById('nav-login').style.display='none';
    document.getElementById('nav-logout').style.display='none';
    document.getElementById('nav-Hello').style.display='none';
  };
  const LogOut = () => {
    document.getElementById('nav-signUp').style.display='block';
    document.getElementById('nav-login').style.display='none';
    document.getElementById('nav-logout').style.display='none';
    document.getElementById('nav-Hello').style.display='none';
    document.getElementById('hdnUserName').textContent= "noUser";
    document.getElementById('nav-Settings').style.display='none';
  };
  const PopUp = () =>{
    fetch("http://127.0.0.1:5000/Categories/"+document.getElementById('hdnUserName').textContent)
      .then(res => res.json())
      .then(
        (result) => {

          console.log(result)
          if(result.Code == 401)
          {
            window.alert(result.Message);
          }
          else if(result.Code == 200)
          {
    debugger;
    if(result.data.business == true)
    {
      document.getElementById('chkBusiness').checked = true;
    }
    if(result.data.entertainment == true)
    {
      document.getElementById('chkEntertainment').checked = true;
    }
    if(result.data.general == true)
    {
      document.getElementById('chkGeneral').checked = true;
    }
    if(result.data.health == true)
    {
      document.getElementById('chkHealth').checked = true;
    }
    if(result.data.science == true)
    {
      document.getElementById('chkScience').checked = true;
    }
    if(result.data.sports == true)
    {
      document.getElementById('chkSports').checked = true;
    }
    if(result.data.technology == true)
    {
      document.getElementById('chkTechnology').checked = true;
    }
    document.getElementById('PopUp').style.display='block';
  }
})
  }
  const DisplayLoginSignUp = () => {
    debugger;
    if(document.getElementById('hdnUserName').textContent == "noUser")
    {
    document.getElementById('nav-signUp').style.display='block';
    document.getElementById('nav-login').style.display='block';
    document.getElementById('nav-logout').style.display='none';
    }
    else
    {
      document.getElementById('nav-signUp').style.display='none';
      document.getElementById('nav-login').style.display='none';
      document.getElementById('nav-logout').style.display='block';
      document.getElementById('nav-Hello').style.display='block';
      document.getElementById('nav-Settings').style.display='block';
    }
    
  };

  return (
    
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'} style={{color:'#ffffff'}} onClick={DisplayLoginSignUp}>
              SlackAttack News
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
              <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={{display: 'none'}}>
                <p className="nav-link" id='hdnUserName' style={{color:'#ffffff'}}> noUser </p>
                </li>
              <li className="nav-item" id='nav-blank'>
                  <p className="nav-link" style={{color:'#000000', width:'900px'}}>
                                                               
                  </p>
                </li>
                <li className="nav-item" id='nav-login'>
                  <Link className="nav-link" to={'/sign-in'} style={{color:'#ffffff'}} onClick={DisplaySignUp}>
                    Login
                  </Link>
                </li>
                <li className="nav-item" id='nav-signUp'>
                  <Link className="nav-link" to={'/sign-up'} style={{color:'#ffffff'}} onClick={DisplayLogin}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item" id='nav-logout' style={{display: 'none'}}>
                  <Link className="nav-link" to={'/sign-in'} style={{color:'#ffffff'}} onClick={LogOut}>
                    Logout
                  </Link>
                </li>
                <li className="nav-item" id='nav-Hello' style={{display: 'none'}}>
                <p className="nav-link" id='lblWelcome' style={{color:'#ffffff'}}> Hello </p>
                </li>
                <li className="nav-item" id='nav-Settings' style={{display: 'none'}}>
                <button className="nav-link" style={{color:'#ffffff', backgroundColor: '#000000', borderBlockStartColor:'#000000'}} onClick={PopUp}>
                    Settings
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <BackButtonListener />    */}
        <div className="auth-wrapper" >
          <div className="auth-inner" >    
           
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
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
