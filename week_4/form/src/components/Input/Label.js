import React from 'react';

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );
}

export default Label;
