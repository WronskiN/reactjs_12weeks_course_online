import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/UserList/UserList';

import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const NUMBER_OF_USERS = 10;
const URL = `https://randomuser.me/api/?results=${NUMBER_OF_USERS}`;

function App() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios.get(URL).then((result) => {
        setUsers(result.data.results);
        setState(true);
      });
    }, 1000);
  }, []);

  return (
    <div className='App'>
      <h1>Users</h1>
      <ReactPlaceholder
        ready={state}
        type='media'
        rows={6}
        showLoadingAnimation
      >
        <UserList users={users} />
      </ReactPlaceholder>
    </div>
  );
}

export default App;
