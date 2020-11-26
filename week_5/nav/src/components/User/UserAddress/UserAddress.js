import React from 'react';
import './userAddress.css';
function UserAddress({ city, country, phone }) {
  return (
    <article className='address'>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <p>Phone: {phone}</p>
    </article>
  );
}

export default UserAddress;
