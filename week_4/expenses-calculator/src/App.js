import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { BudgetListWrapper } from './components/BudgetList';
import { Budget } from './components/Budget';
import { BudgetList } from './components/BudgetList';
import { useLocalStorage } from './utilities/useLocalStorage';
import income from './data/Income';
import expenses from './data/Expenses';

function App() {
  const [budget, setBudget] = useState(0);
  const [incomeArray, setIncomeArray] = useLocalStorage(income, income);
  const [expenseArray, setExpenseArray] = useLocalStorage(expenses, expenses);
  const [typeValue, setTypeValue] = useState('');
  const [state, setState] = useState({
    name: '',
    ammount: 0,
  });
  const [categoryValue, setCategoryValue] = useState('');

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

  const handleBudget = (a, b) => {
    return a - b;
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryValue(value);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setTypeValue(value);
  };

  let newObj = {
    id: 0,
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
    e.preventDefault();
    setBudget(incSum - expSum);
    if (typeValue === 'Income') {
      let actualId = incomeArray.length;
      newObj.id = actualId;
      setIncomeArray([...incomeArray, newObj]);
      setBudget((prevState) => prevState + newObj.ammount);
    } else if (typeValue === 'Expense') {
      let actualId = expenseArray.length;
      newObj.id = actualId;
      setExpenseArray([...expenseArray, newObj]);
      setBudget((prevState) => prevState - newObj.ammount);
    } else return console.log('not working');
  };

  const handleDeleteIncomeElement = (id) => {
    return setIncomeArray(incomeArray.filter((item) => item.id !== id));
  };
  const handleDeleteExpenseElement = (id) => {
    return setExpenseArray(expenseArray.filter((item) => item.id !== id));
  };

  return (
    <div className='App'>
      <h1>expensese calculator</h1>
      <BudgetListWrapper>
        <Budget budget={handleBudget(incSum, expSum)} />
      </BudgetListWrapper>
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
      <div className='container'>
        {incomeArray.length > 0 ? (
          <BudgetListWrapper>
            <h2>Income</h2>
            <BudgetList
              array={incomeArray}
              handleClick={handleDeleteIncomeElement}
            />
          </BudgetListWrapper>
        ) : null}
        {expenseArray.length > 0 ? (
          <BudgetListWrapper>
            <h2>Expenses</h2>
            <BudgetList
              array={expenseArray}
              handleClick={handleDeleteExpenseElement}
            />
          </BudgetListWrapper>
        ) : null}
      </div>
    </div>
  );
}

export default App;
