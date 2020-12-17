import React from 'react';
import Sum from './components/Sum/Sum';
import Buttons from './components/Buttons/Buttons';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Sum />
      <Buttons start={0} />
    </div>
  );
}

export default App;
