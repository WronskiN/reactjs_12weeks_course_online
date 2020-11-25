import React from 'react';

function Button(props) {
  const { content, btnClass, handleClick } = props;
  return (
    <button className={btnClass} onClick={handleClick}>
      {content}
    </button>
  );
}

export default Button;
