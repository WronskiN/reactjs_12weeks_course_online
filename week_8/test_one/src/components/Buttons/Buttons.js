import React, { useState } from 'react';

function Buttons(props) {
  const [counter, setCounter] = useState(props.start);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrementButton = () => {
    setCounter(counter + 1);
  };
  const handleDecrementButton = () => {
    setCounter(counter - 1);
  };
  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleChangeButton = () => {
    setCounter(inputValue);
    setInputValue(0);
  };
  const handleResetButton = () => {
    setCounter(props.start);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <input type='number' value={inputValue} onChange={handleInput} />
      <button onClick={handleChangeButton}>Change</button>
      <button onClick={handleDecrementButton}>-</button>
      <button onClick={handleIncrementButton}>+</button>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
}

export default Buttons;
