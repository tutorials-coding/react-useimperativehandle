import { forwardRef, useImperativeHandle, useRef } from 'react'
import './CustomInput.css'

function CustomInputInner({ label, name, id, onChange }, ref) {
  function handleChange(event) {
    event.preventDefault()
    onChange(event)
  }

  const inputEl = useRef(null)
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputEl.current.focus()
    },
  }))

  return (
    <div className="custom-input__main-container">
      <label className="custom-input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="custom-input__input"
        type="text"
        id={id}
        name={name}
        onChange={handleChange}
        ref={inputEl}
      />
    </div>
  )
}

export const CustomInput = forwardRef(CustomInputInner)
