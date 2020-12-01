import React, { useState, useEffect } from 'react';
import { UserSearch } from '../../components/UserSearch';
import './users.css';
import { UsersList } from '../../components/UsersList';

const URL = './users.json';
// const API_URL = 'https://randomuser.me/api/?results=10';

function Users() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState();

  const loadData = async () => {
    setIsLoaded(true);
    const response = await fetch(URL);
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
    setFilteredUsers(newUser);
    console.log(newUser);
  };

  return (
    <div className='section section__users'>
      <UserSearch filterUser={filterUser} data={users} />
      <h2>users</h2>
      <UsersList data={users} filteredUser={filteredUsers} />
    </div>
  );
}

export default Users;
