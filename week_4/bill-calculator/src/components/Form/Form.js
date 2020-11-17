import React, { useState } from 'react';
import { Select, Input, Button, Result, FormWrapper, SelectOption } from '..';
import './style.css';

function Form() {
  const [netValue, setNetValue] = useState(0);
  const [tipValue, setTipValue] = useState(0);
  const [sum, setSum] = useState(0);

  const VAT = 20;

  const handleInputChange = (e) => {
    let value = e.target.value;
    setNetValue(value);
  };

  const handleOption = (e) => {
    let value = e.target.value;
    setTipValue(value);
  };

  const calculateSum = (netValue, tipValue) => {
    const tip = netValue * (tipValue / 100);
    const base = parseInt(netValue, 10) + tip;
    const total = base + (base * VAT) / 100;

    return setSum(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    calculateSum(netValue, tipValue);
    cleanInput();
  };

  const cleanInput = () => {
    setNetValue(0);
  };

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <FormWrapper>
      <h2>function form</h2>
      <form onSubmit={handleSubmit} className="form">
        <Input type="number" onChange={handleInputChange} value={netValue} />
        <Select onChange={handleOption} value={tipValue}>
          <SelectOption value="0"></SelectOption>
          <SelectOption value="5">5%</SelectOption>
          <SelectOption value="10">10%</SelectOption>
          <SelectOption value="15">15%</SelectOption>
          <SelectOption value="20">20%</SelectOption>
        </Select>
        <Button type="submit" text="Calculate" click={handleClick} />
        <Result sum={sum} />
      </form>
    </FormWrapper>
  );
}

export default Form;
