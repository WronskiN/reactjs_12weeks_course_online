import React from "react";

function MenuLink({ to, children, isActive }) {
  const styles = {
    padding: 10,
    margin: "10px 0",
    link: {
      color: isActive ? "red" : "white",
    },
  };

  return (
    <li style={styles}>
      <a href={to} style={styles.link}>
        {children}
      </a>
    </li>
  );
}

export { MenuLink };
