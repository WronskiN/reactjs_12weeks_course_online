import React from "react";
import "./App.css";

import data from "./data/data";
import Employees from "./components/Employees/Employees";

function App() {
  return (
    <div className="App">
      <Employees data={data} />
    </div>
  );
}

export default App;
