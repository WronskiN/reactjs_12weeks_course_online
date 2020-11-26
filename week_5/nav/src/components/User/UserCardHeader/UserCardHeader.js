import React from 'react';
import './userCardHeader.css';

function UserCardHeader({ photo, name }) {
  return (
    <div className='card__header'>
      <div className='image__wrapper'>
        <img className='image' src={photo} alt={`${name} profile`} />
      </div>
    </div>
  );
}

export default UserCardHeader;
