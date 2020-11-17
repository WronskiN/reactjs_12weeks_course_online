import React from 'react';
import './style.css';

function Button({ type, text, click }) {
  return (
    <button type={type} onClick={click} className="btn">
      {text}
    </button>
  );
}

export default Button;
