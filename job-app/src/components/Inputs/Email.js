import "./Inputs.css";
import { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const [switchClass, setSwitchClass] = useState("form-control fab-TextInput");
  const checkEmail = () => {
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setSwitchClass("form-control fab-TextInput is-valid")
    }
    else {
      setSwitchClass("form-control fab-TextInput is-invalid")
    }
  };
  return (
    <>
      <div className="input">
        <label htmlFor="email-input" className="label-form">Email</label>
        <input
          id="email-input"
          type="email"
          className={switchClass}
          placeholder="name@example.com"
          onChange={(e) => {
            setEmail(e.target.value);
            checkEmail();
          }}
          required />
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