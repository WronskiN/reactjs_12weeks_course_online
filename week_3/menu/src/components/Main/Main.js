import React from "react";
import { Switch, Route } from "react-router-dom";

const styles = {
  width: "90%",
};

function Main() {
  return (
    <div style={styles}>
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/about">About</Route>
        <Route path="/contact">Contact</Route>
        <Route path="/posts">Posts</Route>
      </Switch>
    </div>
  );
}

export { Main };
