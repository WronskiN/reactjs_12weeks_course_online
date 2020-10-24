import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const app = {
  maxWidth: "600px",
  margin: "20px auto",
  padding: 20,
  textAlign: "center",
  backgroundColor: "#000",
  color: "#fff",
};

const font = {
  fontSize: 30,
};

const btnStyle = {
  fontSize: 26,
  color: "grey",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
};

function App() {
  const [uuid, setUuid] = useState(uuidv4());
  const handleClick = () => setUuid(uuidv4());

  return (
    <div style={app}>
      <h1>Online UUID Generator</h1>
      <h2>Your Version 4 UUID</h2>
      <p style={font}>{uuid}</p>
      <button style={btnStyle} onClick={handleClick}>
        Refresh page to generate another
      </button>
    </div>
  );
}

export default App;
