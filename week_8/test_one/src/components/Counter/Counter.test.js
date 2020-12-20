import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
  it('Counter default value should be set to 0 if we didnt passed value in props', () => {
    const component = shallow(<Counter />);
    const counterValue = component.find('p');
    expect(counterValue.text()).toBe('Counter: 0');
  });
  it('Counter value is set to 10 if we passed value in props start', () => {
    const component = shallow(<Counter start={10} />);
    const counterValue = component.find('p');
    expect(counterValue.text()).toBe('Counter: 10');
  });
  it('Component should include increment and decrement button', () => {
    const component = shallow(<Counter />);
    let button = component.find('button[data-test="increment"]');
    expect(button.text()).toBe('+');
    button = component.find('button[data-test="decrement"]');
    expect(button.text()).toBe('-');
  });
  it('Should increment after "increment" btn is clicked', () => {
    const component = shallow(<Counter start={10} />);
    component.find('button[data-test="increment"]').simulate('click');
    const counter = component.find('p');
    expect(counter.text()).toBe('Counter: 11');
  });
  it('Should decrement after "decrement" btn is clicked', () => {
    let component = shallow(<Counter start={10} />);
    component.find('button[data-test="decrement"]').simulate('click');
    const counter = component.find('p');
    expect(counter.text()).toBe('Counter: 9');
  });
  it('Change btn should change counter value with input value', () => {
    const component = shallow(<Counter />);
    const input = component.find('input');
    input.simulate('change', { target: { value: '200' } });

    const button = component.find('button[data-test="changeCounter"]');
    button.simulate('click');

    const counter = component.find('p');

    expect(counter.text()).toBe('Counter: 200');
  });
  it('Reset btn should reset counter value to initial value', () => {
    const props = { start: 10 };
    const component = shallow(<Counter {...props} />);
    component.find('button[data-test="decrement"]').simulate('click');
    component.find('button[data-test="reset"]').simulate('click');
    const counter = component.find('p');

    expect(counter.text()).toBe('Counter: 10');
  });
});
