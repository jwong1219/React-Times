import React from "react";

const Input = (props) => {
  
  const name = `${props.name.charAt(0).toUpperCase()}${props.name.slice(1)}`; 

  return (  
    <div className="form-group">
      <label htmlFor={props.name}>{name}</label>
      <input 
        type="string"
        className="form-control"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Input;