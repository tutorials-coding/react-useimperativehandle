import { useState, useRef, useEffect } from 'react'
import { CustomInput } from '../CustomInput/CustomInput'
import './Form.css'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function handleNameChange(event) {
    setName(event.target.value)
  }
  function handleEmailChange(event) {
    setEmail(event.target.value)
  }
  function handlePhoneChange(event) {
    setPhone(event.target.value)
  }

  const inputEl = useRef(null)
  useEffect(() => {
    inputEl.current.focus()
  }, [])

  function handleSubmit() {
    console.log({
      name,
      email,
      phone,
    })
  }

  return (
    <form className="form__main-container">
      <div className="form__input-container">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleNameChange} />
      </div>
      <div className="form__input-container">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleEmailChange}
          ref={inputEl}
        />
      </div>
      <CustomInput
        label="Email:"
        name="email"
        id="email"
        onChange={handleEmailChange}
      />
      <div className="form__input-container">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handlePhoneChange}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  )
}
