import "./Form.css";
import { useState } from "react";
const Form = (props) => {
  const [name, setName] = useState("");
  const [check, setCheck] = useState("");

  const checkName = () => {
    if (name.length < 10) setCheck("error");
    else setCheck("");
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label> {props.children} </label> <br />
          <input
            type="text"
            placeholder={props.children}
            required
            onChange={(e) => {
              setName(e.target.value);
              checkName();
            }}
          />
        </div>
        <p>{check}</p>
      </form>
    </>
  );
};

export default Form;
