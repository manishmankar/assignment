import React from "react";
import css from "./input.module.css";

function Input({ labelName, type, name, errors, touched, onChange, onBlur, values }) {
  console.log(errors, touched);
  return (
    <div className={css.inputWrapper}>
      <label htmlFor={name}>{labelName}</label>
      <input type={type} name={name} onChange={onChange} onBlur={onBlur} />
    </div>
  );
}

export default Input;
