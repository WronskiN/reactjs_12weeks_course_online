import React from 'react';
import './userCard.css';
import { UserCardHeader, UserContent, UserTitle, UserAddress } from '../';

function UserCard() {
  return (
    <div className='user__card'>
      <UserCardHeader />
      <UserContent>
        <UserTitle name='Norbert' surname='Wronski' />
        <UserAddress city='London' street='london road' postCode='ldn12 21bp' />
      </UserContent>
    </div>
  );
}

export default UserCard;
