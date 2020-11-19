import React, { useState } from 'react';
import { Input, RadioInput, RadioGroup, FieldWrapper, Select } from './';
import { Button } from '../Button';
import './style.css';

function Form() {
  const [catValue, setCatValue] = useState('');
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputNumValue, setInputNumValue] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit works');
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <FieldWrapper>
        <label htmlFor="type">Type</label>
        <RadioGroup>
          <RadioInput name="type" value="Expense" label="Type" />
          <RadioInput name="type" value="Icome" />
        </RadioGroup>
      </FieldWrapper>
      <FieldWrapper>
        <Input type="text" name="Name" value="" label="Name" />
      </FieldWrapper>
      <FieldWrapper>
        <Input type="number" name="Name" value="" label="Ammount" />
      </FieldWrapper>
      <FieldWrapper>
        <Select label="Category" />
      </FieldWrapper>
      <Button className="buttonForm">Add</Button>
    </form>
  );
}

export default Form;
