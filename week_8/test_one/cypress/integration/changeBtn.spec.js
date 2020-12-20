import React from 'react';
import Counter from '../../src/components/Counter/Counter';
describe('Home page', () => {
  it('successfully loaded', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('counter component', () => {
  it('Change btn should change counter value with input value', () => {
    const component = cy.get(<Counter />);
    // const input = component.get('input').should(($input) => {
    //   const val = $input.val();
    // });
    component.get('input');
    const value = component.invoke('val');
    component.get('button[data-test="decrement"]').click();
    const counter = component.get('p');
    counter.contains(`Counter: ${value}`);
  });
});
