import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from '../User/User';
import UserDetails from '../UserDetails/UserDetails';

function UserList({ users }) {
  let usersList = users;
  return (
    <Router>
      <Switch>
        <Route path='/users/:id'>
          <UserDetails />
        </Route>
        <Route path='/'>
          <ul className='user__list'>
            {usersList.map((user, index) => (
              <User key={`id-${index}`} user={user} />
            ))}
          </ul>
        </Route>
      </Switch>
    </Router>
  );
}

export default UserList;
