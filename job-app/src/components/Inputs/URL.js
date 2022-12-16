import React from "react";
import "./Inputs.css";
const URL = (props) => {
return (
    <>
    <label className="label-form">{props.children} </label>
    <div className="input">
        <input
        type="url"
        className="fab-TextInput "
        placeholder={props.children + " if you have"}
        />
    </div>
    </>
);
};
export default URL;
