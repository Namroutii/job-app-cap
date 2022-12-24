import React from "react";
import "./Inputs.css";

const URL = (props) => {
    return (
        <>
            
            <div className="input">
            <label htmlFor={props.children} className="label-form">{props.children} </label>
                <input
                ref={props.refer}
                    type="url"
                    className="fab-TextInput "
                    placeholder={props.children + " if you have"}
                    id={props.children}
                />
            </div>
        </>
    );
};

export default URL;