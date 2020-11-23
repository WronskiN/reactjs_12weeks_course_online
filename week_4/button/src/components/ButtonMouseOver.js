import React, { useRef, useEffect, useState } from 'react';

function ButtonMouseOver() {
  const buttonChange = useRef();
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    if (mouseOver) {
      buttonChange.current.style.color = '#fff';
      buttonChange.current.style.backgroundColor = 'red';
    } else {
      buttonChange.current.style.color = '#000';
      buttonChange.current.style.backgroundColor = 'blue';
    }
  });

  return (
    <button
      ref={buttonChange}
      onMouseOver={() => setMouseOver(!mouseOver)}
      onMouseOut={() => setMouseOver(!mouseOver)}
    >
      Mouse over
    </button>
  );
}

export default ButtonMouseOver;
