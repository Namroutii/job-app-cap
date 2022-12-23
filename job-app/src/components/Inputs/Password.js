import "./Inputs.css";
import { useState } from "react";

const Password = () => {
    const [password, setPassword] = useState("");
    const [switchClass, setSwitchClass] = useState(false);


    const checkPassword = () => {
        if ((password.match(/^(?=.*[0-9])(?=.[a-zA-Z])([a-z_A-Z0-9]+)$/)) && (password.length > 8) && (password.length < 16)) {
            setSwitchClass(true)
        }
        else {
            setSwitchClass(false)
        }
    };

    return (
        <>
            <label htmlFor="password-input" className="label-form">Password</label>
            <div className="input">
                <input
                    id="password-input"
                    type="password"
                    className={switchClass ? "form-control fab-TextInput is-valid" : "form-control fab-TextInput is-invalid"}
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
                    Please provide a valid Password. NOTE(Password must contain capital letters, small letters, numbers, and underscore ` _ ` and length between 8 and 16 digits).
                </div>
            </div>
        </>
    );
};

export default Password;