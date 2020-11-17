import React, { Component } from 'react';
import { Select, Input, Button, Result, FormWrapper, SelectOption } from '..';
import './style.css';

class ClassForm extends Component {
  state = {
    netValue: 0,
    tipValue: 0,
    sum: 0,
    VAT: 20,
  };

  handleInputChange = (e) => {
    let value = e.target.value;
    this.setState({
      netValue: value,
    });
  };

  handleOption = (e) => {
    let value = e.target.value;
    this.setState({
      tipValue: value,
    });
  };

  calculateSum = (netValue, tipValue) => {
    const { VAT } = this.state;
    const tip = netValue * (tipValue / 100);
    const base = parseInt(netValue, 10) + tip;
    const total = base + (base * VAT) / 100;

    return this.setState({
      sum: total,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.calculateSum(this.state.netValue, this.state.tipValue);
    this.cleanInput();
  };

  cleanInput = () => {
    this.setState({
      netValue: 0,
    });
  };

  handleClick = () => {
    console.log('clicked');
  };

  render() {
    const { netValue, tipValue, sum } = this.state;
    return (
      <FormWrapper>
        <h2>class form</h2>
        <form onSubmit={this.handleSubmit} className="form">
          <Input
            type="number"
            onChange={this.handleInputChange}
            value={netValue}
          />
          <Select onChange={this.handleOption} value={tipValue}>
            <SelectOption value="0"></SelectOption>
            <SelectOption value="5">5%</SelectOption>
            <SelectOption value="10">10%</SelectOption>
            <SelectOption value="15">15%</SelectOption>
            <SelectOption value="20">20%</SelectOption>
          </Select>
          <Button type="submit" text="Calculate" click={this.handleClick} />
          <Result sum={sum} />
        </form>
      </FormWrapper>
    );
  }
}

export default ClassForm;
