import './CustomInput.css'

export function CustomInput({ label, name, id, onChange }) {
  function handleChange(event) {
    event.preventDefault()
    onChange(event.target.value)
  }

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
      />
    </div>
  )
}
