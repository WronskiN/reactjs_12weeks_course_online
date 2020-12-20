import React from 'react';
import Counter from '../../src/components/Counter/Counter';
describe('Home page', () => {
  it('successfully loaded', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('counter component', () => {
  it('Should increment after "increment" btn is clicked', () => {
    const component = cy.get(<Counter start={10} />);
    component.get('button[data-test="increment"]').click();
    const counter = component.get('p');
    counter.contains('Counter: 11');
  });
});
