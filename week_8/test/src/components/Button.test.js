import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('renders ok', () => {
  const tree = renderer.create(<Button label='Click me!' />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('testing with jest', () => {
  it('should isOk to be true', () => {
    const isOk = true;
    expect(isOk).toBe(true);
  });
  it('should array length to be 2', () => {
    const names = ['Norbert', 'Justyna'];
    expect(names.length).toBe(2);
  });
});
