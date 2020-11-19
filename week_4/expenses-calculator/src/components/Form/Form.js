import React from 'react';
import {
  Input,
  RadioInput,
  RadioGroup,
  FieldWrapper,
  Select,
  Button,
} from './';
import './style.css';

function Form() {
  return (
    <form className="form">
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
      <Button value="Add" />
    </form>
  );
}

export default Form;
