import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { NavMenu } from './components/NavMenu';
import { Button } from './components/Button';
import { Home, Users, About, Contact } from './containers';
import { User } from './components/User';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => setToggleMenu(!toggleMenu);
  const handleInnerButton = () => setToggleMenu(false);

  return (
    <div className='App'>
      <Router>
        <Button
          content='Menu'
          btnClass='btnDefault'
          handleClick={handleClick}
        />
        <NavMenu handleClick={handleInnerButton} toggleStatus={toggleMenu} />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users/:id'>
            <User />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
