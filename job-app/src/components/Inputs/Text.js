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
      <form>
        <label className="label-form"> {props.children} </label>
        <div className="form">
          <input
            className="fab-TextInput"
            placeholder={props.children}
            onChange={(e) => {
              setName(e.target.value);
              checkName();
            }}
            required
            type="text"
          />
          <br />
        </div>
        <span className="validation">{check}</span>
      </form>
    </>
  );
};

export default Text;
