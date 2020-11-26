import React, { useState } from 'react';
import { Form } from '../Form';
import { Input } from '../Input';

function UserSearch({ initialValue = '' }) {
  const [state, setState] = useState(initialValue);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setState((prevState) => value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`sent ${state}`);
    setState((prevState) => initialValue);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Name and surname'
          value={state}
          onChange={handleInputChange}
        />
      </Form>
    </div>
  );
}

export default UserSearch;
