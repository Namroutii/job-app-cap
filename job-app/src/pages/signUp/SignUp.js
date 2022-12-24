import "./SignUp.css"

import NavBarLogin from "../../components/NavigationBars/NavBarLogin.";

import Footer from "../../components/footer/Footer";
import Name from "../../components/Inputs/Name";
import Email from "../../components/Inputs/Email";
import Phone from "../../components/Inputs/Phone";
import Password from "../../components/Inputs/Password";
import Date from "../../components/Inputs/Date";
import React, { useRef } from "react";

function SignUp() {
    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const age = useRef();
    const password = useRef();

    const handleSubmit = () => {
        localStorage.setItem('name', name.current.value)
        localStorage.setItem('email', email.current.value)
        localStorage.setItem('phone', phone.current.value)
        localStorage.setItem('age', age.current.value)
        localStorage.setItem('password', password.current.value)
    };


    return (
        <>
            <div className="signUp-body">
                <NavBarLogin />
                <div className="signUp-page">
                    <form className="signUp-cover" >
                        <h1 className="signUp-header">Sign Up</h1>
                        <Name refer={name}>Full Name</Name>
                        <Email refer={email} />
                        <Phone refer={phone} >Phone Number</Phone>
                        <Date refer={age} />
                        <Password refer={password} />
                        <button className="signUp-button" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default SignUp;