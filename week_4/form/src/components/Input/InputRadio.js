import React from 'react';

function InputRadio(props) {
  const { type, name, placeholder, value, id, onChange } = props;
  return (
    <input
      className="inputRadio"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={onChange}
    />
  );
}

export default InputRadio;
