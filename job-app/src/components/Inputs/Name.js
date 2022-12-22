import "./Inputs.css";
import { useState } from "react";

const Name = (props) => {
    const [name, setName] = useState("");
    const [switchClass, setSwitchClass] = useState(false);

    const checkName = () => {
        if (name.length >= 3) {
            setSwitchClass(true)
        }
        else {
            setSwitchClass(false)
        }
    };

    return (
        <>
            <div className="input">
                <label for="name-input" className="form-label label-text">{props.children}</label>
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
                <div class="invalid-feedback">
                    Please provide a valid Name.
                </div>
            </div>
        </>
    );
};

export default Name;