import React from "react"
import "./loginform.css"
import LoginFace from "../Inputs/LoginFace"
import { Link } from "react-router-dom";
import { useRef } from 'react';


const LoginForm = () => {
    const email = useRef();
    const password = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((email.current.value === "hireme@cap.com") && (password.current.value === "12345")) {
            localStorage.setItem("email.Data", "admin@cap.com")
            localStorage.setItem("password.Data", "12345")
        }
    };
    return (
        <>
            <form className="cover" onSubmit={handleSubmit}>
                <h1 className="login-text">HireMe Login</h1>
                <input ref={email} className="login-input" type="email" placeholder="username" />
                <input ref={password} className="login-input" type="password" placeholder="password" />
                <button className="login-btn" >Login</button>
                <div className="face-login">
                    <LoginFace />
                </div>
                <button className="signUp-btn">
                    <Link to="/signUp">or Sign Up </Link>
                </button>
            </form>
        </>
    )
}

export default LoginForm;