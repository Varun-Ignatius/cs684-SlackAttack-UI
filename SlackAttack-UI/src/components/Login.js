import React, { Component,useState , useRef, useEffect} from 'react'
import { Route, useNavigate, Routes } from 'react-router-dom';
import { createBrowserHistory, history } from 'history' 

function Login(){
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg]=  useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(()=>{
    setErrMsg('');
  }, [userName, password])
  let navigate = useNavigate(); 
  const submit = async (e) => {
    e.preventDefault();
    debugger;
    let pass = password.replace("#","%23")
    fetch("http://127.0.0.1:5000/signIn/"+userName +"&"+pass)
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
            
            document.getElementById('nav-signUp').style.display='none';
            document.getElementById('nav-login').style.display='none';
            document.getElementById('nav-logout').style.display='block';
            document.getElementById('nav-Hello').style.display='block';
            document.getElementById('nav-Settings').style.display='block';
            document.getElementById('lblWelcome').textContent="Hello "+userName;
            document.getElementById('hdnUserName').textContent= userName;
            let path = '/'; 
            navigate(path);
        }
      },
        (error) => {

          console.log(error)
        }
      )
      
  };  
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            id='txtUserName'
            type="text"
            ref = {userRef}
            onChange={(e) => setUserName(e.target.value)}
            values={userName}
            required
            className="form-control"
            placeholder="Enter username"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            id='txtPassword'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            values={password}
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        {/* <Link to={'/'}> */}
        <div className="d-grid">
        
          <button type="button" className="btn btn-primary" style={{backgroundColor:'#545555', borderColor:'#000000'}} onClick={submit}>
            Submit
          </button>
         
        </div>
        {/* </Link> */}
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }

  export default Login