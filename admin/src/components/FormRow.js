
const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <input
          style={{fontSize:"24px"}}
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className='form-input'
        //   style={{width:"40%"}}
        />
      </div>
    )
  }
  
  export default FormRow
  