import React from 'react';
import { Input, RadioInput, RadioGroup, FieldWrapper, Select } from './';
import { Button } from '../Button';
import './style.css';

function Form(props) {
  const {
    handleSubmit,
    handleTypeChange,
    handleChange,
    handleCategoryChange,
    name,
    ammount,
    categoryValue,
  } = props;
  return (
    <form className='form' onSubmit={handleSubmit}>
      <FieldWrapper>
        <label htmlFor='type'>Type</label>
        <RadioGroup>
          <RadioInput
            name='type'
            value='Expense'
            label='Type'
            typeChange={handleTypeChange}
          />
          <RadioInput
            name='type'
            value='Income'
            label='Type'
            typeChange={handleTypeChange}
          />
        </RadioGroup>
      </FieldWrapper>
      <FieldWrapper>
        <Input
          type='text'
          name='name'
          value={name}
          label='Name'
          onChange={handleChange}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Input
          type='number'
          name='ammount'
          value={ammount}
          label='Ammount'
          onChange={handleChange}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Select
          label='Category'
          name='category'
          value={categoryValue}
          categoryChange={handleCategoryChange}
        />
      </FieldWrapper>
      <Button className='buttonForm'>Add</Button>
    </form>
  );
}

export default Form;
