import React, { useState } from "react";
import "./styles.css";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { checkInternationalPhone } from "./Validation";

export default function App() {
  const [phone, setPhone] = useState("");
  const [formatted, setFormatted] = useState("");
  const [valid, setValid] = useState(false);

  const handleChange = (value, data) => {
    setFormatted(value.slice(data.dialCode.length));
    setPhone(value);
    setValid(checkInternationalPhone(value.slice(data.dialCode.length)));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="container">
        <ReactPhoneInput
          value={phone}
          isValid={checkInternationalPhone}
          onChange={handleChange}
          country="ng"
        />
        <p>
          Value: <span>{phone}</span>
        </p>
        <p>
          Formatted Without Country Code: <span>{formatted}</span>
        </p>
        <p>
          Length: <span>{formatted.length}</span>
        </p>
        <p>
          IsValid: <span className={valid ? "green" : "red"}>{`${valid}`}</span>
        </p>
      </div>
    </div>
  );
}
