import React, { useState, useEffect } from "react";

const FunctionTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => setInterval(() => setTime(time + 1), 1000));

  return <div>Function Timer: {time}</div>;
};

export default FunctionTimer;
