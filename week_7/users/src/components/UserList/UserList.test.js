import React from 'react';
import { shallow } from 'enzyme';
import UserList from './UserList';

describe('UserList component', () => {
  it('UserList length should be 10', () => {
    const list = shallow(<UserList />);
    const userList = list.find('ul');
    expect(userList).toHaveLength(10);
  });
});
