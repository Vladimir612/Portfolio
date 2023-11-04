import React, { useEffect } from "react";
import { useState } from "react";
import "./InputText.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const InputText = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputValue = props.value && props.value.value;
  const otherInputValue =
    props.validate && props.validate.exact && props.validate.exact.value;

  useEffect(() => {
    if (props.validate) {
      props.handleValidate({
        min: props.validate.min,
        email: props.validate.email,
        value: props.value,
        exact: props.validate.exact,
        name: props.name,
      });
    }
  }, [inputValue, otherInputValue, props.validate.display]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={`input-text-wrapper validate-${
        props.validate.display !== 0
      } valid-${props.value && props.value.valid && props.value.valid.v}`}
    >
      <input
        type={
          props.type
            ? props.type === "password"
              ? showPassword
                ? "text"
                : "password"
              : props.type
            : "text"
        }
        name={props.name}
        className={`input-text empty-${
          props.value && props.value.value === ""
        }`}
        value={props.value ? props.value.value : ""}
        onChange={props.onChange}
        autoComplete="off"
      />
      <label htmlFor={props.name} className="input-text-label">
        {props.text}
      </label>
      {props.type && props.type === "password" && (
        <>
          {showPassword ? (
            <AiFillEye size={30} onClick={() => setShowPassword(false)} />
          ) : (
            <AiFillEyeInvisible
              size={30}
              onClick={() => setShowPassword(true)}
            />
          )}
        </>
      )}
      <p className="msg-err">
        {props.validate.display !== 0 &&
          props.value &&
          props.value.valid &&
          props.value.valid.msg}
      </p>
    </div>
  );
};

export default InputText;
