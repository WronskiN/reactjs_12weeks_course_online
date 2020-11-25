import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { NavMenu } from './components/NavMenu';
import { Button } from './components/Button';
import { Home, Users, About, Contact } from './containers';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => setToggleMenu(!toggleMenu);
  const handleInnerButton = () => setToggleMenu(false);

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch('https://randomuser.me/api/?results=10')
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //         console.log(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

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
