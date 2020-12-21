describe('Home page', () => {
  it('successfully loaded', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('counter component', () => {
  it('Change btn should change counter value with input value', () => {
    const input = cy.get('input');
    input.type(3);
    const button = cy.get('button[data-test="changeCounter"]');
    button.click();
    const counter = cy.get('p');
    counter.contains('Counter: 3');
  });
});
