import "./Inputs.css";
import { useState } from "react";

const YearsExp = (props) => {
    const [yearsExp, setYearsExp] = useState("");
    const [switchClass, setSwitchClass] = useState(false);

    const checkYearsExp = () => {
        let stringYearsExp = String(yearsExp);

        if (stringYearsExp.length < 2) {
            setSwitchClass(true)
        }
        else {
            setSwitchClass(false)
        }
    };

    return (
        <>
            <label htmlFor="yearsExp-input" className="label-form">{props.children} </label>
            <div className="input">
                <input
                    id="yearsExp-input"
                    className={switchClass ? "form-control fab-TextInput is-valid" : "form-control fab-TextInput is-invalid"}
                    type="phone"
                    placeholder={props.children}
                    onChange={(e) => {
                        setYearsExp(e.target.value);
                        checkYearsExp();
                    }}
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
