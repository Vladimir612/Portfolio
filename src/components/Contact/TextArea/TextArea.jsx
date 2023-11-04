import React from "react"
import "./TextArea.scss"

const TextArea = props => {
  // const inputValue = props.value && props.value.value

  // useEffect(() => {
  //   if (props.validate) {
  //     props.handleValidate({
  //       min: props.validate.min,
  //       value: props.value,
  //       name: props.name,
  //     })
  //   }
  // }, [inputValue, props.validate.display]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={`input-text-wrapper validate-${
        props.validate.display !== 0
      } valid-${props.value && props.value.valid && props.value.valid.v}`}
    >
      <textarea
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
      <p className="msg-err" style={{ marginTop: "-4px" }}>
        {props.validate.display !== 0 &&
          props.value &&
          props.value.valid &&
          props.value.valid.msg}
      </p>
    </div>
  )
}

export default TextArea
