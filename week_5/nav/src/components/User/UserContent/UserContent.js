import React from 'react';
import './userContent.css';

function UserContent({ children }) {
  return <div className='user__content'>{children}</div>;
}

export default UserContent;
