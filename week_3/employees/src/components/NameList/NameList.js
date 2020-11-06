import React from "react";

function NameList({ children }) {
  return (
    <div className="listWrapper">
      <ul className="list">{children}</ul>
    </div>
  );
}

export default NameList;
