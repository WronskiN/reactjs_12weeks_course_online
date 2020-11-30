import React, { useState, useEffect } from 'react';
import { UserSearch } from '../../components/UserSearch';
import './users.css';
import { UsersList } from '../../components/UsersList';
import { UserCard } from '../../components/User';

// const URL = '../../../public/users.json';

function Users() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('');
  const API_URL = 'https://randomuser.me/api/?results=10';

  const data = [...users];

  const loadData = async () => {
    setIsLoaded(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsers(data.results);
    return setIsLoaded(!isLoaded);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filterUser = (data, value) => {
    const newUser = data.filter((user) =>
      user.name.first.toLowerCase().includes(value)
    );
    setUsers(newUser);
    console.log(users);
  };

  return (
    <div className='section section__users'>
      <UserSearch
        data={data}
        filterUser={filterUser}
        value={() => setValue(value)}
      />
      <h2>users</h2>
      <UsersList data={users}>
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
      </UsersList>
    </div>
  );
}

export default Users;
