import React from 'react';

function Input(props) {
  const { type, name, placeholder, value, onChange, values } = props;
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      values={values}
    />
  );
}

export default Input;
