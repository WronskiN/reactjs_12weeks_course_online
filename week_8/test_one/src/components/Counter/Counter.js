import React, { useState } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(props.start === 10 ? props.start : 0);
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
      <button data-test='changeCounter' onClick={handleChangeButton}>
        Change
      </button>
      <button data-test='decrement' onClick={handleDecrementButton}>
        -
      </button>
      <button data-test='increment' onClick={handleIncrementButton}>
        +
      </button>
      <button data-test='reset' onClick={handleResetButton}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
