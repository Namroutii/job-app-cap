import "./Inputs.css";


import { useState } from "react";
const Text = (props) => {
  const [name, setName] = useState("");
  const [check, setCheck] = useState("");

  const checkName = () => {
    if (props.children === "Full Name") {
      if (name.length < 10) setCheck("");
      else setCheck("");
    }
  };

  return (
    <>
    <div className="input">
      
      <label htmlFor={props.children} className="label-text "> {props.children} </label>
      <input
        className="fab-TextInput "
        placeholder={props.children}
        ref={props.refer}
        type="text"
      />
      <span className="validation">{check}</span>
      </div>
    </>
  );
};

export default Text;
