import React from 'react';

export function SelectOption({ value }) {
  return (
    <option value={value} className="selectOption">
      {value}
    </option>
  );
}
