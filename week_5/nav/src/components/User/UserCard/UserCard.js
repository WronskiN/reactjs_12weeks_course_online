import React from 'react';
import './userCard.css';
import { UserCardHeader, UserContent, UserTitle, UserAddress } from '../';

function UserCard(props) {
  const { name, surname, city, country, phone, photo } = props;
  return (
    <div className='user__card'>
      <UserCardHeader photo={photo} name={name} />
      <UserContent>
        <UserTitle name={name} surname={surname} />
        <UserAddress city={city} country={country} phone={phone} />
      </UserContent>
    </div>
  );
}

export default UserCard;
