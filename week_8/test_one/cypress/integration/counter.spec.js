import React from 'react';
import Counter from '../../src/components/Counter/Counter';
describe('Home page', () => {
  it('successfully loaded', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('counter component', () => {
  it('Counter default value should be set to 0 if we didnt passed value in props', () => {
    const counter = cy.get('p');
    counter.contains('Counter: 10');
  });
  it('Counter value is set to 10 if we passed value in props start', () => {
    const component = cy.get(<Counter start={10} />);
    const counterValue = component.get('p');
    counterValue.contains('Counter: 10');
  });
  it('Component should include increment and decrement button', () => {
    const component = cy.get(<Counter />);
    let button = component.get('button[data-test="increment"]');
    button.contains('+');
    button = component.get('button[data-test="decrement"]');
    button.contains('-');
  });
});
