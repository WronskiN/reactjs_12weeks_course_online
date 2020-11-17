import React from 'react';
import './App.css';
import { Form, ClassForm } from './components';

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Form />
      <ClassForm styles="form" />
    </div>
  );
}

export default App;
