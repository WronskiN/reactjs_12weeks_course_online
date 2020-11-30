import React from 'react';
import './usersList.css';
import { UserCard } from '../User';

function UsersList({ data, filteredUser }) {
  return (
    <div className='user__list'>
      {!filteredUser
        ? data.map((user, index) => (
            <UserCard
              key={`key-${index}`}
              name={user.name.first}
              surname={user.name.last}
              city={user.location.city}
              country={user.location.country}
              phone={user.cell}
              photo={user.picture.medium}
            />
          ))
        : filteredUser.map((user, index) => (
            <UserCard
              key={`key-${index}`}
              name={user.name.first}
              surname={user.name.last}
              city={user.location.city}
              country={user.location.country}
              phone={user.cell}
              photo={user.picture.medium}
            />
          ))}
    </div>
  );
}

export default UsersList;
