import React from 'react';
import ListItem from './ListItem';
function BudgetList({ array, handleClick }) {
  return (
    <ul className='budgetList'>
      {array.map((el, index) => (
        <ListItem
          key={`key-${index}`}
          category={el.category}
          name={el.name}
          ammount={el.ammount}
          array={array}
          id={el.id}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default BudgetList;
