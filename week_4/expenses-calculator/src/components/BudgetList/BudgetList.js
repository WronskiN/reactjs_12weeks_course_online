import React from 'react';
import ListItem from './ListItem';
function BudgetList({ budget }) {
  return (
    <ul className="budgetList">
      {budget.map((el) => (
        <ListItem
          key={`key-${el.id}`}
          category={el.category}
          name={el.name}
          ammount={el.ammount}
        />
      ))}
    </ul>
  );
}

export default BudgetList;
