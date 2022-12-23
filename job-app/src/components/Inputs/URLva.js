import "./Inputs.css";
import { useState } from "react";

const URLva = (props) => {
    const [url, setUrl] = useState("");
    const [switchClass, setSwitchClass] = useState(false);

    const checkUrl = () => {
        if (url.match(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/)) {
            setSwitchClass(true)
        }
        else {
            setSwitchClass(false)
        }
    };

    return (
        <>
            <div className="input">
            <label htmlFor="urlVa-input" className="label-form">{props.children} </label>
                <input
                    id="urlVa-input"
                    type="url"
                    className={switchClass ? "form-control fab-TextInput is-valid" : "form-control fab-TextInput is-invalid"}
                    placeholder={props.children}
                    onChange={(e) => {
                        setUrl(e.target.value);
                        checkUrl();
                    }}
                    required />
                <div className="valid-feedback">
                    Successful
                </div>
                <div className="invalid-feedback">
                    Please provide a valid GitHub URL.
                </div>
            </div>
        </>
    );
};

export default URLva;