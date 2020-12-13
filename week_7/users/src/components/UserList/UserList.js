import React from 'react';
import User from '../User/User';

function UserList({ users }) {
  let usersList = users;
  return (
    <ul className='user__list'>
      {usersList.map((user, index) => (
        <User key={`id-${index}`} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
