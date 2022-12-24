import React from "react"
import "./loginform.css"
import LoginFace from "../Inputs/LoginFace"

const LoginForm = () => {
    return (
        <div className="cover">
            <h1 className="login-text">HireMe Login</h1>
            <input className="login-input" type="text" placeholder="username" />
            <input className="login-input" type="password" placeholder="password" />
            <button className="login-btn" >Login</button>



            <div className="face-login">
                <LoginFace />
            </div>

        </div>
    )
}

export default LoginForm;