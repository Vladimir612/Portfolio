import React from "react"
import "./FormWrapper.scss"

const FormWrapper = props => {
  const imageFormStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    ...props.style,
  }

  const customStyle = props.image ? imageFormStyle : props.style

  return (
    <div className="form-wrapper" style={customStyle}>
      <div className="form-content">
        {props.formTitle && <h2 className="form-title">{props.formTitle}</h2>}
        {props.children}
      </div>
      {props.image && (
        <div className="img-wrapper register-image">
          <img src={props.image} alt={props.imageAlt} />
        </div>
      )}
    </div>
  )
}

export default FormWrapper
