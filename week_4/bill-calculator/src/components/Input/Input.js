import React from 'react';
import './style.css';

function Input({ type, onChange, value }) {
  return (
    <input type={type} onChange={onChange} value={value} className="input" />
  );
}

export default Input;
