import "./Inputs.css";
import { useState } from "react";

const Email = (props) => {
  const [email, setEmail] = useState("");
  const [switchClass, setSwitchClass] = useState(false);

  const checkEmail = () => {
    if ((email.length > 0) && (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
      setSwitchClass(true)
    }
    else {
      setSwitchClass(false)
    }
  };

  return (
    <>
      <div className="input">
      <label htmlFor="email-input" className="label-form">Email</label>
        <input
        required
        ref={props.refer}
          id="email-input"
          type="email"
          className={switchClass ? "form-control fab-TextInput is-valid" : "form-control fab-TextInput is-invalid"}
          placeholder="name@example.com"
          onChange={(e) => {
            setEmail(e.target.value);
            checkEmail();
          }}
           />
        <div className="valid-feedback">
          We will keep you informed!
        </div>
        <div className="invalid-feedback">
          Please provide a valid Email.
        </div>
      </div>
    </>
  );
};

export default Email;