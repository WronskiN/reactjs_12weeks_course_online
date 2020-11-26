import React, { useState, useEffect } from 'react';
import { UserCard } from '../../components/User';
import { UserSearch } from '../../components/UserSearch';
import './users.css';

// const URL = '../../../public/users.json';

function Users() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  const API_URL = 'https://randomuser.me/api/?results=10';

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoaded(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsers(data.results);
    return setIsLoaded(false);
  };

  return (
    <div className='section section__users'>
      <UserSearch />
      <h2>users</h2>
      {console.log(users)}
      {users.map((user, index) => (
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

export default Users;
