import React from 'react';
import categories from '../../../data/Categories';
import { SelectOption } from './SelectOption';

function Select({ label }) {
  return (
    <label className="selectInnerContainer">
      {label}
      <select className="select">
        {categories.map((el, index) => (
          <SelectOption key={`${el}-${index}`} value={el} />
        ))}
      </select>
    </label>
  );
}

export default Select;
