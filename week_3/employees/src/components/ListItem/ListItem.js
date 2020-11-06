import React from "react";

function ListItem({ children, onClick }) {
  return (
    <li className="listItem" onClick={onClick}>
      {children}
    </li>
  );
}

export default ListItem;
