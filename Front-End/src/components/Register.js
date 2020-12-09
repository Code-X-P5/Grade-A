import React,{useState} from 'react'
import logo from './pics/logo.png'
import axios from 'axios'

const Register = () => {

const [userName,setuserName]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const [confPassword,setconfPassword]=useState('')
const [phone,setphone]=useState('')
const [adress,setadress]=useState('')
const [role,setrole]=useState('student')

// const userHandler=(e)=>{
//     setuserName(e.target.value);
//     let name =userName
//     console.log(name)
// }
// const emailHandler=(e)=>{
//     setemail(e.target.value)
// }
// const passHandler=(e)=>{
//     setpassword(e.target.value)
// }
// const confPassHandler=(e)=>{
//     setconfPassword(e.target.value)
// }
// const phoneHandler=(e)=>{
//     setphone(e.target.value)
// }
// const adressHandler=(e)=>{
//     setadress(e.target.value)
// }
const roleHandler=()=>{
    setrole("instructor")
}
const onSignUp=(name,adress,email,password,phone)=>{
    axios.post(`http://localhost:5000/registration/register/${role}`,{name,adress,email,password,phone})
        .then((response)=>{
            console.log("done")
        })
        .catch((err)=>{throw err})
}

    return (
        <div className="registerCont">
            <div className="register">
                <div className="registerLogo">
                    <img src={logo} alt=""></img>
                    <p>Sign Up as student or Instructor</p>
                </div>
                <div className="s-border"></div>
                <div className="inputs">
                    <input placeholder="User Name" name="text" onChange={(e)=>setuserName(e.target.value)} required/>

                    <input placeholder="Email" name="email" onChange={(e)=>setemail(e.target.value)} required/>

                    <input placeholder="Password" name="password" type="password" onChange={(e)=>setpassword(e.target.value)}required/>

                    <input placeholder="Confirm Password" name="password" type="password" onChange={(e)=>setconfPassword(e.target.value)} required/>

                    <input placeholder="Phone Number" name="number" type="number" onChange={(e)=>setphone(e.target.value)} required/>

                    <input placeholder="Adress" name="text" onChange={(e)=>setadress(e.target.value)} required/>
                </div>
                <div className="check">
                            <input type="checkbox" name="" onClick={roleHandler} ></input>
                            <label > Register as a Instructor</label>
                        </div>
                <div className="signup">
                    <button onClick={()=>onSignUp(userName,email,password,phone,adress)}>Sign Up</button>
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
