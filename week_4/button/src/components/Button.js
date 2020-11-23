import React, { useRef, useEffect } from 'react';

export default function Button() {
  const buttonChange = useRef();

  useEffect(() => {
    setTimeout(() => {
      buttonChange.current.style.color = '#fff';
      buttonChange.current.style.backgroundColor = 'red';
    }, 500);
  });
  return <button ref={buttonChange}>Primary</button>;
}
