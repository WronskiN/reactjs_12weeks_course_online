import React, { useState } from 'react';
import { Input, RadioInput, RadioGroup, FieldWrapper, Select } from './';
import { Button } from '../Button';
import income from '../../data/Income';
import './style.css';

function Form({
  handleSubmit,
  handleTypeChange,
  handleChange,
  handleCategoryChange,
  name,
  ammount,
  categoryValue,
}) {
  // const [typeValue, setTypeValue] = useState('');
  // const [categoryValue, setCategoryValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  // const [state, setState] = useState({
  //   name: '',
  //   ammount: '',
  // });
  const [arr, setArr] = useState(income);
  // let newArr = [
  //   {
  //     id: state.name,
  //     name: state.name,
  //     ammount: state.ammount,
  //     category: categoryValue,
  //   },
  // ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (typeValue === 'Income') {
  //     setArr([...arr, newArr]);
  //     console.log('submit works');
  //   } else console.log('not working');
  // };

  // const handleTypeChange = (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setTypeValue(value);
  // };

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setState({
  //     ...state,
  //     [e.target.name]: value,
  //   });
  // };

  // const handleCategoryChange = (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setCategoryValue(value);
  // };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FieldWrapper>
        <label htmlFor="type">Type</label>
        <RadioGroup>
          <RadioInput
            name="type"
            value="Expense"
            label="Type"
            typeChange={handleTypeChange}
          />
          <RadioInput
            name="type"
            value="Income"
            label="Type"
            typeChange={handleTypeChange}
          />
        </RadioGroup>
      </FieldWrapper>
      <FieldWrapper>
        <Input
          type="text"
          name="name"
          value={name}
          // value={state.name}
          label="Name"
          onChange={handleChange}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Input
          type="number"
          name="ammount"
          value={ammount}
          // value={state.ammount}
          label="Ammount"
          onChange={handleChange}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Select
          label="Category"
          name="category"
          value={categoryValue}
          categoryChange={handleCategoryChange}
        />
      </FieldWrapper>
      <Button className="buttonForm">Add</Button>
    </form>
  );
}

export default Form;
