import React from 'react';

const InputWrapper = React.forwardRef((props, ref) => (
  <div ref={ref} className="inputWrapper">
    {props.children}
  </div>
));

export default InputWrapper;
