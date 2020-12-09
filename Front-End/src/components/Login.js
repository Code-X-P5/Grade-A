import React from 'react'
import logo from './pics/logo.png'

const Login = () => {
    return (
        <div className="loginCont">
            <div className="login">
                <div className="loginLogo">
                    <img src={logo} alt=""></img>
                    <p>Log In as student or Instructor</p>
                    <div className="l-border"></div>
                    
                </div>
                <div className="inputs">

                <input placeholder="Email" name="email" required/>

                <input placeholder="Password" name="password" type="password" required/>
                </div>
                <div className="signup">
                    <button >Login</button>
                    <p>Login to enroll in courses and more . </p>
                </div>
            </div>
            <div className="not-sign">
                <p>Don't have an account?</p><a href="http://localhost:3000/register">Sign up</a>
            </div>  
        </div>
    )
}

export default Login
