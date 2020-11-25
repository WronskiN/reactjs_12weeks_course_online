import React from 'react';
import './userAddress.css';
function UserAddress({ city, street, postCode }) {
  return (
    <article className='address'>
      <p>city: {city}</p>
      <p>street: {street}</p>
      <p>postCode: {postCode}</p>
    </article>
  );
}

export default UserAddress;
