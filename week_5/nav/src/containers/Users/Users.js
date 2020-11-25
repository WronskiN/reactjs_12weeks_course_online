import React from 'react';
import { UserCard } from '../../components/User';
import './users.css';

function Users() {
  return (
    <div className='section section__users'>
      <h2>Users</h2>
      <UserCard />
    </div>
  );
}

export default Users;
