import React from 'react';

function Input({ name, label, type }) {
  return (
    <label className="inputInnerContainer">
      {label && label}
      <input name={name} type={type} />
    </label>
  );
}

export default Input;
