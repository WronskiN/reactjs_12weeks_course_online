import React from 'react';
import { Link } from 'react-router-dom';

function User({ user }) {
  const address = user.location;
  const name = user.name;
  return (
    <div className='user__card'>
      <img src={user.picture.medium} alt='user profile' />
      <article>
        <h3>
          <Link to='/'>
            {name
              ? `${user.name.first} ${user.name.last}`
              : 'The name was not found'}
          </Link>
        </h3>
        <p>
          {address
            ? `Address: ${user.location.street.number} ${user.location.street.name}`
            : 'The address was not found'}
        </p>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Registered: ${new Date(user.registered.date)
          .toLocaleDateString('en-UK')
          .split('/:| /')}`}</p>
      </article>
    </div>
  );
}

export default User;
