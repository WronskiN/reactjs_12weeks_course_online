import React from 'react';
import './App.css';
// import Form from './components/pages/Form/Form';
// import { FormClass } from './components/pages/FormClass';
import FormFormik from './components/pages/Formik';

function App() {
  return (
    <div className="App">
      <h2>Form - hooks</h2>
      {/* <Form /> */}
      <h2>Form - class</h2>
      {/* <FormClass /> */}

      <FormFormik />
    </div>
  );
}

export default App;
