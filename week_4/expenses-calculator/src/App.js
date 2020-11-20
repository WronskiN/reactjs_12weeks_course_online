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
  const [incomeArray, setIncomeArray] = useState(income);
  const [expenseArray, setExpenseArray] = useState(expenses);
  const [typeValue, setTypeValue] = useState('');
  const [state, setState] = useState({
    name: '',
    ammount: '',
  });
  const [categoryValue, setCategoryValue] = useState('');

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setCategoryValue(value);
  };

  // let tempIncomeArr = [...incomeArray];
  let newObj = {
    id: state.name,
    name: state.name,
    ammount: state.ammount,
    category: categoryValue,
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(income, incomeArray, expenseArray, newObj);
    e.preventDefault();
    if (typeValue === 'Income') {
      setIncomeArray([...incomeArray, newObj]);
      console.log('submit works');
    } else if (typeValue === 'Expense') {
      setExpenseArray([...expenseArray, newObj]);
    } else return console.log('not working');
  };
  const handleTypeChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setTypeValue(value);
  };

  return (
    <div className="App">
      <h1>expensese calculator</h1>
      <Budget budget={budget} />
      <Form
        incomeArray={setIncomeArray}
        handleSubmit={handleSubmit}
        handleTypeChange={handleTypeChange}
        handleChange={handleChange}
        handleCategoryChange={handleCategoryChange}
        name={state.name}
        ammount={state.ammount}
        categoryValue={categoryValue}
      />
      {incomeArray.length > 0 ? (
        <BudgetListWrapper>
          <h2>Income</h2>
          <BudgetList budget={incomeArray} />
        </BudgetListWrapper>
      ) : null}
      {expenseArray.length > 0 ? (
        <BudgetListWrapper>
          <h2>Expenses</h2>
          <BudgetList budget={expenseArray} />
        </BudgetListWrapper>
      ) : null}
    </div>
  );
}

export default App;
