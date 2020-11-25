import React, { useState } from 'react';
import './App.css';

import { NavMenu } from './components/NavMenu';
import { Button } from './components/Button';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu(!toggleMenu);
  const handleInnerButton = () => setToggleMenu(false);

  return (
    <div className='App'>
      <Button content='Menu' btnClass='btnDefault' handleClick={handleClick} />
      <NavMenu handleClick={handleInnerButton} toggleStatus={toggleMenu} />
    </div>
  );
}

export default App;
