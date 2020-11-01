import React from "react";

const styles = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 10,
};

function Footer({ heart, shareAlt, angle, onClick }) {
  return (
    <div style={styles}>
      <div className="widget">
        <div className="iconWrapper">{heart}</div>
        <div className="iconWrapper">{shareAlt}</div>
      </div>
      <div className="iconWrapper" onClick={onClick}>
        {angle}
      </div>
    </div>
  );
}

export { Footer };
