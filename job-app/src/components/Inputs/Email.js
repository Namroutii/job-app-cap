import "./Inputs.css"

import { useState } from "react";

const Email = (props) => {


    const [email, setEmail] = useState("");
    const [checkEm, setCheckEmail] = useState("");


    const checkEmail = () => {
        if (email.length < 10) setCheckEmail("error");
        else setCheckEmail("done");
    };

    return (
        <>
            <form>
                <label className="select-label">Email</label>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            checkEmail();
                        }}
                    />
                </div>
                <p>{checkEm}</p>
            </form>
        </>
    );
};

export default Email;
