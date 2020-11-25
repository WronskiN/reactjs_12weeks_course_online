import React from 'react';
import './UserTitle.css';

function UserTitle({ name, surname }) {
  return (
    <h3 className='user__title'>
      {name} {surname}
    </h3>
  );
}

export default UserTitle;
