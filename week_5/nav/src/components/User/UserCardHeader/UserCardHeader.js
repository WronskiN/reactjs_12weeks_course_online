import React from 'react';
import './userCardHeader.css';

function UserCardHeader() {
  return (
    <div className='card__header'>
      <div className='image__wrapper'>
        <img
          className='image'
          src='https://images.unsplash.com/photo-1601758176559-76c75ead317a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          alt='lena'
        />
      </div>
    </div>
  );
}

export default UserCardHeader;
