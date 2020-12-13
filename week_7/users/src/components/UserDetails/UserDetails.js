import React from 'react';
import { Link, useParams } from 'react-router-dom';
import User from '../User/User';

function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.filter((user) => user.login.uuid === id)[0];
  console.log(user);
  return (
    <div>
      <h4>
        <Link to='/'>Back Home</Link>
      </h4>
      <User user={user} />
    </div>
  );
}

export default UserDetails;
