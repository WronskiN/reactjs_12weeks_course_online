import React, { forwardRef } from 'react';

const ButtonMouseOverTwo = forwardRef((props, ref) => (
  <button onMouseOut={props.mouseOut} onMouseOver={props.mouseOver} ref={ref}>
    Mouse over
  </button>
));

export default ButtonMouseOverTwo;
