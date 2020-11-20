import React from 'react';

function Input(props) {
  const { name, label, type, value, onChange } = props;
  return (
    <label className="inputInnerContainer">
      {label && label}
      <input name={name} type={type} value={value} onChange={onChange} />
    </label>
  );
}

export default Input;
