import React from 'react';
import categories from '../../../data/Categories';
import { SelectOption } from './SelectOption';

function Select(props) {
  const { children, label, categoryChange, name } = props;
  return (
    <label className="selectInnerContainer">
      {label}
      <select className="select" onChange={categoryChange}>
        {children}
        {categories.map((el, index) => (
          <SelectOption key={`${el}-${index}`} value={el} name={name} />
        ))}
      </select>
    </label>
  );
}

export default Select;
