import "./Inputs.css";
import { useState } from "react";

const Password = () => {
    const [password, setPassword] = useState("");
    const [switchClass, setSwitchClass] = useState("form-control fab-TextInput");
    const pattern = "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
    const checkPassword = () => {
        if (password.match(pattern)) {
            setSwitchClass("form-control fab-TextInput is-valid")
        }
        else {
            setSwitchClass("form-control fab-TextInput is-invalid")
        }
    };
    return (
        <>
            <label htmlFor="password-input" className="label-form">Password</label>
            <div className="input">
                <input
                    id="password-input"
                    type="password"
                    className={switchClass}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        checkPassword();
                    }}
                    required
                />
                <div className="valid-feedback">
                    Looks good!
                </div>
                <div className="invalid-feedback">
                    Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!
                </div>
            </div>
        </>
    );
};

export default Password;