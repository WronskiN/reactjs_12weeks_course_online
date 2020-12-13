import React from 'react';

function User({ user }) {
  return (
    <div className='user__card'>
      <img src={user.picture.medium} alt='user profile' />
      <article>
        <p>{`Name: ${user.name.first} ${user.name.last}`}</p>
        <p>{`Address: ${user.location.street.number} ${user.location.street.name}`}</p>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Registered date: ${new Date(user.registered.date)
          .toLocaleDateString('en-UK')
          .split('/:| /')}`}</p>
      </article>
    </div>
  );
}

export default User;
