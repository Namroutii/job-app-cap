import "./Inputs.css"

import { useState } from "react";

const Phone = (props) => {

    const [number, setNumber] = useState("");
    const [check, setCheck] = useState("");

    const checkNumber = () => {
        let stringNumber = String(number);
        if (stringNumber.length !== 9) setCheck("error");
        else setCheck("done");
    };

    return (
        <>
            <form>
                <div className="form-number">
                    <label>Phone Number</label>
                    <input
                        className="form-control form-control-lg"
                        type="phone"
                        placeholder="NUMBER"
                        onChange={(e) => {
                            setNumber(e.target.value);
                            checkNumber();
                        }}
                    />
                </div>
                <p>{check}</p>
            </form>
        </>
    );
};

export default Phone;
