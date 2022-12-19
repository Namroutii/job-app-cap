import "./Inputs.css";

import { useState } from "react";

const Phone = (props) => {
  const [number, setNumber] = useState("");
  const [check, setCheck] = useState("");

  const checkNumber = () => {
    let stringNumber = String(number);


    if (!stringNumber.trim().match(/^05(6\d|9)[0-9]{7}$/))
      setCheck("error");
    else setCheck("done");





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
        /> <br/>
        <span className="validation">{check}</span>
      </div>
    </>
  );
};

export default Phone;
