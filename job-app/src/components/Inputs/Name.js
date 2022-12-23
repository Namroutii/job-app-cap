import "./Inputs.css";
import { useState } from "react";

const Name = (props) => {
    const [name, setName] = useState("");
    const [switchClass, setSwitchClass] = useState(false);

    const pattern = "^[A-Za-z]{3,16}$";
    const checkName = () => {
        if (name.trim().match(pattern)) {
            setSwitchClass(true)
        }
        else {
            setSwitchClass(false)
        }
    };

    return (
        <>
            <div className="input">
                <label htmlFor="name-input" className="form-label label-text">{props.children}</label>
                <input type="text"
                    className={switchClass ? "form-control fab-TextInput is-valid" : "form-control fab-TextInput is-invalid"}
                    id="name-input" placeholder={props.children}
                    onChange={(e) => {
                        setName(e.target.value);
                        checkName();
                    }}
                    required />
                <div className="valid-feedback">
                    Nice Name
                </div>
                <div className="invalid-feedback">
                    The name should be 3-16 characters and shouldn't include any special character!
                </div>
            </div>
        </>
    );
};

export default Name;