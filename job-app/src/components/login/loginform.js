import React from "react"
import "./loginform.css"

const LoginForm = () => {
    return (
        <div className="cover">

            <h1 className="login-text">HireMe Login</h1>

            <input className="login-input" type="text" placeholder="username" />
            <input className="login-input" type="password" placeholder="password" />

            <div className="login-btn" >Login</div>

            <p className="login-text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

        </div>
    )
}

export default LoginForm;