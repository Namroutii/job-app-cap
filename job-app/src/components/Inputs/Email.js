import "./Inputs.css";
import { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const [checkEm, setCheckEmail] = useState("");

  const checkEmail = () => {
    if (email.length < 10) setCheckEmail("error");
    else setCheckEmail("done");
  };

  return (
    <>
      <label className="label-form">Email</label>
      <div className="input">

        <input
          type="email"
          className="fab-TextInput "
          placeholder="name@example.com"
          onChange={(e) => {
            setEmail(e.target.value);
            checkEmail();
          }}
          required
        />
        <br />
        <span className="validation">{checkEm}</span>
      </div>
    </>
  );
};

export default Email;
