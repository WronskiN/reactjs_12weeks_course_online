import React from 'react';
import Counter from '../../src/components/Counter/Counter';
describe('Home page', () => {
  it('successfully loaded', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('counter component', () => {
  it('Reset btn should reset counter value to initial value', () => {
    const props = { start: 10 };
    const component = cy.get(<Counter {...props} />);
    component.get('button[data-test="reset"]').click();
    const counter = component.get('p');

    counter.contains('Counter: 10');
  });
});
