import React from "react";
import "./App.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Input, Textarea } from "./components/Form";

const icon = <FontAwesomeIcon icon={faUser} />;

function App() {
  return (
    <div className="App">
      <Input />
      <Textarea />
      <Button icon={icon} label="Click me" bgColor="darkBlue" color="white" />
    </div>
  );
}

export default App;
