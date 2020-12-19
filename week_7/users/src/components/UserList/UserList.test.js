import React from 'react';
import { shallow } from 'enzyme';
import UserList from './UserList';

describe('UserList component', () => {
  const users = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
  it('UserList length should be 10', () => {
    const list = shallow(<UserList users={users} />);
    const userList = list.find('ul');
    expect(userList).toHaveLength(10);
    // expect(userList.length).toBe(10);
  });
});
