import React from 'react';
import './style.css';

function Select({ children, onChange, value }) {
  return (
    <select className="select" name="vat" onChange={onChange} value={value}>
      {children}
    </select>
  );
}

export default Select;
