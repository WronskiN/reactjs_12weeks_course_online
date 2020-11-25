import React, { useState, useEffect } from 'react';
import './style.css';

import Button from '../Button';

function Snackbar(props) {
  const { content, duration, snackbarStatus, handleClose, handleClick } = props;
  const [snakbarState, setSnackbarState] = useState();

  useEffect(() => {
    setSnackbarState(snackbarStatus);
    const timer = setTimeout(() => {
      handleClose();
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [snackbarStatus, duration, handleClose]);

  return (
    <>
      {snakbarState ? (
        <div className='snackbar--success'>
          <h2>{content}</h2>
          <Button
            buttonContent='x'
            closBtnClass='closeBtn'
            handleClick={handleClick}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Snackbar;
