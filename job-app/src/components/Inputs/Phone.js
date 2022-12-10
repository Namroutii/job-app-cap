import "./Inputs.css";

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
        <label className="label-form">{props.children} </label>
        <div className="form">
          <input
            className="fab-TextInput "
            type="phone"
            placeholder={props.children}
            onChange={(e) => {
              setNumber(e.target.value);
              checkNumber();
            }}
            required
          />
        </div>
        <span className="validation">{check}</span>
      </form>
    </>
  );
};

export default Phone;
