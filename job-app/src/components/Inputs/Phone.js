import "./Inputs.css";

import { useState } from "react";

const Phone = (props) => {
  const [number, setNumber] = useState("");
  const [check, setCheck] = useState("");

  const checkNumber = () => {
    let stringNumber = String(number);


    if (props.children === "Phone Number") {

      if (stringNumber[0] === '0' && stringNumber[1] === '5' && (stringNumber[2] === '6' || stringNumber[2] === '9') && stringNumber.length === 9)
        setCheck("Successful");
      else setCheck("Phone number must start with 056 or 059 and has 10 digits.");
    }
    if (props.children === "Years of Experience") {
      if (stringNumber.length < 2)
        setCheck("Successful");
      else setCheck("Really!");
    }

  };

  return (
    <>
      <label className="label-form">{props.children} </label>
      <div className="input">
        <input
          className="fab-TextInput "
          type="phone"
          placeholder={props.children}
          onChange={(e) => {
            setNumber(e.target.value);
            checkNumber();
          }}
          required

        />{" "}
        <br />

        <span className="validation">{check}</span>
      </div>
    </>
  );
};

export default Phone;
