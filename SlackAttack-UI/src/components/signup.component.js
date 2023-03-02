import React, { Component} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default class SignUp extends Component {
  render() {
    const DisplaySignUp = () => {
      document.getElementById('nav-signUp').style.display='block';
      document.getElementById('nav-login').style.display='none';
      document.getElementById('nav-logout').style.display='none';
    };
    return (
      <form>
        <h3>Sign Up</h3>

       

        <div className="mb-3">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Username" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <Link to={'/'}>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" style={{backgroundColor:'#545555', borderColor:'#000000'}} to="">
            Sign Up
          </button>
        </div>
        </Link>
        
        <p className="forgot-password text-right">
          Already registered  <Link to={'/sign-in'} onClick={DisplaySignUp}>sign in?</Link>
        </p>
       
      </form>
    )
  }
}
