import React from 'react';
import './style.css';

const styles = {
  marginTop: 50,
  padding: 5,
  cursor: 'pointer',
};

function Button({ buttonContent, handleClick, closBtnClass }) {
  return (
    <button style={styles} onClick={handleClick} className={closBtnClass}>
      {buttonContent}
    </button>
  );
}

export default Button;
