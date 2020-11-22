import React from 'react';

function Budget({ budget }) {
  return (
    <div
      className={
        budget < 0 ? 'budget budget--negative' : 'budget budget--positive'
      }
    >
      {budget}
    </div>
  );
}

export default Budget;
