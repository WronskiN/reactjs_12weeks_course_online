import React from 'react';

function RadioInput({ value, name }) {
  return (
    <label className="radioInnerContainer">
      <input type="radio" value={value} name={name} />
      {value}
    </label>
  );
}

export default RadioInput;
