import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  
  render() {
    const DisplayLogout = () => {
      document.getElementById('nav-signUp').style.display='None';
      document.getElementById('nav-login').style.display='None';
      document.getElementById('nav-logout').style.display='block';
    };
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
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
        <Link to={'/'}>
        <div className="d-grid">
        
          <button type="submit" className="btn btn-primary" style={{backgroundColor:'#545555', borderColor:'#000000'}} onClick = {DisplayLogout}>
            Submit
          </button>
         
        </div>
        </Link>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
