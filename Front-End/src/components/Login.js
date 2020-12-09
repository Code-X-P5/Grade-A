import React from 'react'
import logo from './pics/logo.png'

const Login = () => {
    return (
        <div className="loginCont">
            <div className="login">
                <div className="loginLogo">
                    <img src={logo} alt=""></img>
                    <div className="l-border"></div>
                </div>
            </div>
        </div>
    )
}

export default Login
