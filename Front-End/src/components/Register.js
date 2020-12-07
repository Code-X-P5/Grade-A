import React from 'react'
import logo from './pics/logo.png'

const Register = () => {
    return (
        <div className="registerCont">
            <div className="register">
                <div className="registerLogo">
                    <img src={logo}></img>
                    <p>Sign Up as student or Instructor</p>
                </div>
                <div className="s-border"></div>
                <div className="inputs">
                    <input placeholder="User Name" name="text" required/>

                    <input placeholder="Email" name="email" required/>

                    <input placeholder="Password" name="password" required/>

                    <input placeholder="Confirm Password" name="password" required/>

                    <input placeholder="Phone Number" name="number" type="number" required/>

                    <input placeholder="Adress" name="text" required/>
                </div>
                <div className="signup">
                    <button>Sign Up</button>
                    <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy . </p>
                </div>
            
            </div>
            <div className="is-sign">
                <p>Have an account?</p><a href="http://localhost:3000/login">Log In</a>
            </div>   
        </div>
        
    )
}

export default Register
