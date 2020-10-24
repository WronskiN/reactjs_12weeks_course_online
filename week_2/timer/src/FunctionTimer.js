import React, { useState, useEffect } from "react";

const FunctionTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((time) => time + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Function Timer: {time}</div>;
};

export default FunctionTimer;
