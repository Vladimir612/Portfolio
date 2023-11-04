import { useState } from "react"

const useForm = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    e.persist()
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  return [state, handleChange]
}

export default useForm
