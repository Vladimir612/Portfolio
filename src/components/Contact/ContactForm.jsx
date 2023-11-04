import React, { useState } from "react"

import Form from "./Form/Form"
import FormWrapper from "./FormWrapper/FormWrapper"
import InputText from "./InputText/InputText"
import useForm from "./useForm"
import TextArea from "./TextArea/TextArea"
import axios from "axios"

const ContactForm = () => {
  const [values, handleChange, validate] = useForm()
  const [displayValidation, setDisplayValidation] = useState(0)
  const [messageSuccess, setMessageSuccess] = useState("")

  const handleSubmit = async () => {
    setDisplayValidation(displayValidation + 1)
    let valid = true
    Object.keys(values).map(key => {
      if (!values[key].valid.v) valid = false
      return true
    })

    if (valid) {
      setMessageSuccess("Message successfully sent")
      axios
        .post("https://hireclass.herokuapp.com/api/question", {
          email: values.email.value,
          question: values.message.value,
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <FormWrapper
      // formTitle="Contact us"
      imageAlt="Contact image"
      style={{
        minHeight: "initial",
        position: "initial",
        transform: "translate(0%, 5%)",
      }}
    >
      <Form>
        <InputText
          type="email"
          name="email"
          text="Email"
          value={values.email}
          onChange={handleChange}
          validate={{ display: displayValidation, email: true }}
          handleValidate={validate}
        />
        <TextArea
          name="message"
          text="Your message for us"
          value={values.message}
          onChange={handleChange}
          validate={{ display: displayValidation, min: 10 }}
          handleValidate={validate}
        />
        <button
          onClick={e => {
            e.preventDefault()
            handleSubmit()
          }}
          className={messageSuccess !== "" ? "disabled" : ""}
        >
          Send message
        </button>
        <p className="succ-message">{messageSuccess}</p>
      </Form>
    </FormWrapper>
  )
}

export default ContactForm
