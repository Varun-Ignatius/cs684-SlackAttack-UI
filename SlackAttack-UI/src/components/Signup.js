import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    
function SignUp() {
    
    const DisplaySignUp = () => {
      document.getElementById('nav-signUp').style.display='block';
      document.getElementById('nav-login').style.display='none';
      document.getElementById('nav-logout').style.display='none';
      
    };
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
      setValidEmail(emailRegex.test(email));
  }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd, email])
    let navigate = useNavigate(); 
    const submit = async (e) => {
      e.preventDefault();
      debugger;
      const v1 = USER_REGEX.test(user);
      const v2 = PWD_REGEX.test(pwd);
      const v3 = emailRegex.test(email);
      if (!v1) {
          setErrMsg("Invalid UserName");
          window.alert("Invalid UserName");
          return;
      }
      else if(!v2){
        setErrMsg("Invalid Password");
          window.alert("Invalid Password");
          return;
      }
      else if(!v3){
        setErrMsg("Invalid Email");
          window.alert("Invalid Email");
          return;
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: user,
          user_pass: pwd,
          email: email})
    };
      fetch("http://127.0.0.1:5000/signUp",requestOptions)
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
              document.getElementById('nav-signUp').style.display='block';
              document.getElementById('nav-login').style.display='none';
              document.getElementById('nav-logout').style.display='none';
              document.getElementById('nav-Hello').style.display='none';
              window.alert(result.Message);
              let path = '/sign-in'; 
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
        <h3>Sign Up</h3>

       

        <div className="mb-3" data-testid="username">
          <label>Username
          </label>
          <input type="text" className="form-control" placeholder="Username" ref = {userRef}
            onChange={(e) => setUser(e.target.value)}
            values={user}
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            required/>
        </div>
        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
        <FontAwesomeIcon icon={faInfoCircle} />
         4 to 24 characters, must begin with a letter.<br />
         Letters, numbers, underscores, hyphens allowed.
        </p>
      
        <div className="mb-3">
          <label>Email address
          </label>
          
          <input
          id
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
            values={email}
            placeholder="Enter email"
          />
        </div>
        <p id="uidnote" className={emailFocus && email && !validMatch ? "instructions" : "offscreen"}>
        <FontAwesomeIcon icon={faInfoCircle} />
         Must follow this template: 'xyz@abc.com'.
        </p>
        <div className="mb-3">
          <label>Password
          </label>
          
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPwd(e.target.value)}
            required
            values={pwd}
            placeholder="Enter password"
            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
          />
        </div>
        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters, must include uppercase and lowercase letters, a number and a special character. Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                      
        <div className="mb-3">
          <label>Confirm Password
          </label>
          
          <input
            type="password"
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            values={matchPwd}
            className="form-control"
            placeholder="Re-Enter password"
          />
        </div>
        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" style={{backgroundColor:'#545555', borderColor:'#000000'}} onClick={submit} >
            Sign Up
          </button>
        </div>
    
        
        <p className="forgot-password text-right">
          Already registered  <Link to={'/sign-in'} onClick={DisplaySignUp}>sign in?</Link>
        </p>
       
      </form>
    )
  }
  export default SignUp
