import React from "react";
import "./input.scss";

const Input = ({ lable, ...rest }) => {
  return (
    <div className="input-wrapper">
      <p className="label">{lable}</p>
      <input type="text" className="input" placeholder="form-input" {...rest} />
    </div>
  );
};

export default Input;
