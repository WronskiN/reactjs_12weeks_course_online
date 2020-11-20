import React, { useState } from 'react';
import { Input, RadioInput, RadioGroup, FieldWrapper, Select } from './';
import { Button } from '../Button';
import './style.css';

function Form() {
  const [typeValue, setTypeValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [state, setState] = useState({
    name: '',
    ammount: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit works');
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setTypeValue(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    console.log(state.name, state.ammount);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryValue(value);
    console.log(categoryValue);
  };

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
            value="Icome"
            label="Type"
            typeChange={handleTypeChange}
          />
        </RadioGroup>
      </FieldWrapper>
      <FieldWrapper>
        <Input
          type="text"
          name="name"
          value={state.name}
          label="Name"
          onChange={handleChange}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Input
          type="number"
          name="ammount"
          value={state.ammount}
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
