import React from 'react';
import './style.css';

function Input(props) {
  const { type, placeholder, value, onChange } = props;
  return (
    <input
      className='input'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
