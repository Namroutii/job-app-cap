import "./Inputs.css";
import { useState } from "react";

const Phone = (props) => {
  const [number, setNumber] = useState("");
  const [switchClass, setSwitchClass] = useState("form-control fab-TextInput");
  const checkNumber = () => {
    let stringNumber = String(number);
    /*
        if (!stringNumber.trim().match(/^05(6\d|9)[0-9]{7}$/)) {
          setSwitchClass(true)
        }
        else {
          setSwitchClass(false)
        }
    */
    if (stringNumber[0] === '0' && stringNumber[1] === '5' && (stringNumber[2] === '6' || stringNumber[2] === '9') && stringNumber.length === 9) {
      setSwitchClass("form-control fab-TextInput is-valid")
    }
    else {
      setSwitchClass("form-control fab-TextInput is-invalid")
    }
  };
  return (
    <>
      <div className="input">
        <label htmlFor="phone-input" className="label-form">{props.children} </label>
        <input
        required
        ref={props.refer}
          id="phone-input"
          className={switchClass}
          type="phone"
          placeholder={props.children}
          onChange={(e) => {
            setNumber(e.target.value);
            checkNumber();
          }}
          />
        <div className="valid-feedback">
          Successful
        </div>
        <div className="invalid-feedback">
          Invalid phone number. "Phone number must start with 056 or 059 and has 10 digits."
        </div>
      </div>
    </>
  );
};

export default Phone;