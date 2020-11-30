import React, { useState } from 'react';
import { Form } from '../Form';
import { Input } from '../Input';
import { Button } from '../Button';

function UserSearch({ initialValue = '', data, filterUser, value }) {
  const [state, setState] = useState(initialValue);

  const handleChange = (e) => {
    const value = e.target.value;
    setState((prevState) => value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`sent ${state}`);
    value(state);
    filterUser(data, value);
  };

  const handleReset = () => {
    setState('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Name and surname'
          value={state}
          onChange={handleChange}
        />
        <Button
          content='search'
          btnClass='btnDefault'
          handleClick={handleSubmit}
        />
        <Button
          content='x'
          btnClass='btnDefault btn--reset'
          handleClick={handleReset}
        />
      </Form>
    </div>
  );
}

export default UserSearch;
