import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders ok', () => {
  const tree = renderer.create(<Button label='Click me!' />).toJSON();
  expect(tree).toMatchSnapshot();
});

// describe('testing with jest', () => {
//   it('should isOk to be true', () => {
//     const isOk = true;
//     expect(isOk).toBe(true);
//   });
//   it('should array length to be 2', () => {
//     const names = ['Norbert', 'Justyna'];
//     expect(names.length).toBe(2);
//   });
// });

describe('Button component', () => {
  it('should renders OK 0', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find('button');
    expect(button.text()).toBe('OK 0');
  });
  it('should renders Click me 0', () => {
    const wrapper = shallow(<Button label='Click me' />);
    const button = wrapper.find('button');
    expect(button.text()).toBe('Click me 0');
  });
  it('should have counter set to 0', () => {
    const wrapper = shallow(<Button />);
    const counter = wrapper.find('button span');
    expect(counter.text()).toBe('0');
  });
  it('should increment counter', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find('button');
    let counter = wrapper.find('button span');
    expect(counter.text()).toBe('0');
    button.simulate('click');
    counter = wrapper.find('button span');
    expect(counter.text()).toBe('1');
  });
});
