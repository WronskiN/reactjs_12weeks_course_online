import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../Button';

function Snackbar(props) {
  const {
    content,
    duration,
    snackbarStatus,
    handleClose,
    handleClick,
    position,
    type,
  } = props;
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
        <div className={`snackbar ${type} ${position}`}>
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

Snackbar.propTypes = {
  content: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  snackbarStatus: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
};

export default Snackbar;
