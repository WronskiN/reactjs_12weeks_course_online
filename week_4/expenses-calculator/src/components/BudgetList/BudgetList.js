import React from 'react';
import ListItem from './ListItem';
function BudgetList({ budget }) {
  return (
    <ul className='budgetList'>
      {budget.map((el, index) => (
        <ListItem
          key={`key-${index}`}
          category={el.category}
          name={el.name}
          ammount={el.ammount}
        />
      ))}
    </ul>
  );
}

export default BudgetList;
