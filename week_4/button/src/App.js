import React, { createRef, useState, useEffect } from 'react';
import { Button, ButtonMouseOver, ButtonMouseOverTwo } from './components';
import './App.css';

function App() {
  const buttonChange = createRef();
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    if (mouseOver) {
      buttonChange.current.style.color = '#fff';
      buttonChange.current.style.backgroundColor = 'red';
    } else {
      buttonChange.current.style.color = '#000';
      buttonChange.current.style.backgroundColor = 'blue';
    }
  });

  const handleMouseOver = () => {
    setMouseOver(!mouseOver);
  };

  const handleMouseOut = () => {
    setMouseOver(!mouseOver);
  };

  return (
    <div className='App'>
      <h1>Button project</h1>
      <Button />
      <ButtonMouseOver />
      <ButtonMouseOverTwo
        ref={buttonChange}
        mouseOver={handleMouseOver}
        mouseOut={handleMouseOut}
      />
    </div>
  );
}

export default App;
