import React from "react";

const styles = {
  width: "100%",
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  padding: 10,
};

const date = new Date().toDateString();

function Header({ iconMenu }) {
  return (
    <section style={styles}>
      <div className="logo">
        <h1>R</h1>
      </div>
      <div className="titleRow">
        <p>Shrimp and Chorizo Paella</p>
        <p className="date">{date}</p>
      </div>
      <div className="iconWrapper">{iconMenu}</div>
    </section>
  );
}

export { Header };
