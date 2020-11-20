import React from 'react';

function RadioInput({ value, name, typeChange }) {
  return (
    <label className="radioInnerContainer">
      <input type="radio" value={value} name={name} onChange={typeChange} />
      {value}
    </label>
  );
}

export default RadioInput;
