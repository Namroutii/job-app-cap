import "./Inputs.css";
import { useState } from "react";

const YearsExp = (props) => {
    const [yearsExp, setYearsExp] = useState("");
    const [switchClass, setSwitchClass] = useState("form-control fab-TextInput");

    const handleChange = (event) => {
        setYearsExp(event.target.value);
        checkYearsExp();
    }

    const checkYearsExp = () => {
        let stringYearsExp = String(yearsExp);
        if (stringYearsExp.length < 2) {
            setSwitchClass("form-control fab-TextInput is-valid")
        }
        else {
            setSwitchClass("form-control fab-TextInput is-invalid")
        }
    };
    return (
        <>
            <div className="input">
                <label htmlFor="yearsExp-input" className="label-form">{props.children} </label>
                <input
                required
                ref={props.refer}
                    id="yearsExp-input"
                    className={switchClass}
                    type="phone"
                    placeholder={props.children}
                    onChange={handleChange}
                    required
                />
                <div className="valid-feedback">
                    Successful
                </div>
                <div className="invalid-feedback">
                    Please provide a valid number (Years of Experience must be not more than 2 digits, if there is not just enter ).
                </div>
            </div>
        </>
    );
};

export default YearsExp;