import React from 'react';
import './userCard.css';
import { UserCardHeader, UserContent, UserTitle, UserAddress } from '../';
import { Link } from 'react-router-dom';

function UserCard(props) {
  const { name, surname, city, country, phone, photo, id } = props;

  return (
    <div className='user__card'>
      <Link to={`/users/${id}`}>
        <UserCardHeader photo={photo} name={name} />
        <UserContent>
          <UserTitle name={name} surname={surname} />
          <UserAddress city={city} country={country} phone={phone} />
        </UserContent>
      </Link>
    </div>
  );
}

export default UserCard;
