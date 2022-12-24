import React from "react"
import "./loginform.css"
import LoginFace from "../Inputs/LoginFace"

import { Link } from "react-router-dom";




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
            <button className="signUp-btn">
                <Link to="/signUp">or Sign Up </Link>
            </button>
        </div>
    )
}

export default LoginForm;