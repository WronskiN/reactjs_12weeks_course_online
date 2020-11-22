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
    ammount: 0,
  });
  const [categoryValue, setCategoryValue] = useState('');

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryValue(value);
  };

  let newObj = {
    name: state.name,
    ammount: Number(state.ammount),
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
    console.log(incomeArray, expenseArray, newObj);
    e.preventDefault();
    if (typeValue === 'Income') {
      setIncomeArray([...incomeArray, newObj]);
      // console.log('submit works');
    } else if (typeValue === 'Expense') {
      setExpenseArray([...expenseArray, newObj]);
    } else return console.log('not working');

    handleBudgetAmmount();
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    // console.log(value);
    setTypeValue(value);
  };

  const handleBudgetAmmount = () => {
    const incArr = [...incomeArray];
    const expArr = [...expenseArray];
    let incSum = incArr
      .map(({ ammount }) => ammount)
      .reduce((a, b) => {
        return a + b;
      }, 0);
    let expSum = expArr
      .map(({ ammount }) => ammount)
      .reduce((a, b) => {
        return a + b;
      }, 0);
    return console.log(incSum, expSum);
  };

  return (
    <div className='App'>
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
