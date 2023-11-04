import React from "react";
import "./Form.scss";

const Form = (props) => {
  return (
    <form
      className="def-form"
      style={{ width: props.prefWidth } && props.style}
    >
      {props.children}
    </form>
  );
};

export default Form;
