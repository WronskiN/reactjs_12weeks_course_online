import React from 'react';
import './style.css';

function Result({ sum }) {
  return (
    <p className="result">
      Result: <span>{sum}</span>
    </p>
  );
}

export default Result;
