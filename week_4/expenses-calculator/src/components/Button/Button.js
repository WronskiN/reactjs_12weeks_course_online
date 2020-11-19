import React from 'react';

function Button({ children, className }) {
  return <button className={`buttonDefault ${className}`}>{children}</button>;
}

export default Button;
