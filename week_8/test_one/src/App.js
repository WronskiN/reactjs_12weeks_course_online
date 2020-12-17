import React from 'react';
import Sum from './components/Sum/Sum';
import Counter from './components/Counter/Counter';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Sum />
      <Counter start={10} />
    </div>
  );
}

export default App;
