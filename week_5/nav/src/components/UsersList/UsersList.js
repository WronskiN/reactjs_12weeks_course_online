import React from 'react';
import './usersList.css';
import { UserCard } from '../User';

function UsersList({ data, filteredUser }) {
  return (
    <div className='user__list'>
      {!filteredUser
        ? data.map((user, index) => (
            <UserCard
              key={user.id}
              name={user.name.first}
              surname={user.name.last}
              city={user.location.city}
              country={user.location.country}
              phone={user.cell}
              photo={user.picture.medium}
              id={user.id}
            />
          ))
        : filteredUser.map((user, index) => (
            <UserCard
              key={user.id}
              name={user.name.first}
              surname={user.name.last}
              city={user.location.city}
              country={user.location.country}
              phone={user.cell}
              photo={user.picture.medium}
              id={user.id}
            />
          ))}
    </div>
  );
}

export default UsersList;
