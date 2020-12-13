import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import UserList from './components/UserList/UserList';

const URL = 'https://randomuser.me/api/?results=10';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(URL).then((result) => {
      setUsers(result.data.results);
    });
  }, []);

  return (
    <div className='App'>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
