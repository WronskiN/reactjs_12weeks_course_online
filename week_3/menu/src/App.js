import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Menu } from "./components/Menu";
import { MenuLink } from "./components/MenuLink";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about" isActive>
            About
          </MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
          <MenuLink to="/posts">Posts</MenuLink>
        </Menu>
        <Main />
      </Router>
    </div>
  );
}

export default App;
