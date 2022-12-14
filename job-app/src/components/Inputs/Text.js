import "./Inputs.css";

import { useState } from "react";
const Text = (props) => {
  const [name, setName] = useState("");
  const [check, setCheck] = useState("");

  const checkName = () => {
    if (name.length < 10) setCheck("error");
    else setCheck("");
  };

  return (
    <>
      <label className="label-text"> {props.children} </label>
      <div className="input">
        <input
          className="fab-TextInput"
          placeholder={props.children}
          onChange={(e) => {
            setName(e.target.value);
            checkName();
          }}
          required
          type="text"
        /></div>
      <span className="validation">{check}</span>
    </>
  );
};

export default Text;
