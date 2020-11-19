import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { BudgetListWrapper } from './components/BudgetList';
import { Budget } from './components/Budget';
import { BudgetList } from './components/BudgetList';
import income from './data/Income';
import expenses from './data/Expenses';

function App() {
  const [budget, setBudget] = useState(0);

  return (
    <div className="App">
      <h1>expensese calculator</h1>
      <Budget budget={budget} />
      <Form />
      {income.length > 0 ? (
        <BudgetListWrapper>
          <h2>Income</h2>
          <BudgetList budget={income} />
        </BudgetListWrapper>
      ) : null}
      {expenses.length > 0 ? (
        <BudgetListWrapper>
          <h2>Expenses</h2>
          <BudgetList budget={expenses} />
        </BudgetListWrapper>
      ) : null}
    </div>
  );
}

export default App;
