import React, { useState } from 'react';
import Button from './components/Button';
import { Dialog } from './components/Dialog';
import './App.css';

const defaultBtnText = 'Open Dialog';

function App() {
  const [state, setState] = useState(false);
  const handleClick = () => setState(!state);
  return (
    <div className='App'>
      <h1>Dialog</h1>
      <Button text={defaultBtnText} handleClick={handleClick} />
      {state && <Dialog handleClick={handleClick} />}
    </div>
  );
}

export default App;
