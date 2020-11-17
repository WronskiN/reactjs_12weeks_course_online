import React from 'react';

function SelectOption({ children, value }) {
  return <option value={value}>{children}</option>;
}

export default SelectOption;
