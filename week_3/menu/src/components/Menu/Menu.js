import React from "react";

const styles = {
  width: "20%",
  height: "100%",
  background: "black",
};

function Menu({ children }) {
  return (
    <nav style={styles}>
      <ul>{children}</ul>
    </nav>
  );
}

export { Menu };
