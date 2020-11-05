import React from "react";

const styles = {
  padding: 20,
  textAlign: "left",
};

function ExtendContent({ paragraph, title }) {
  return (
    <div style={styles}>
      <h3>{title}</h3>
      {paragraph.map((el) => (
        <p className="paragraph">{el}</p>
      ))}
      {/* <p className="paragraph">{paragraph}</p>
      <p className="paragraph">{paragraph}</p>
      <p className="paragraph">{paragraph}</p> */}
    </div>
  );
}

export { ExtendContent };
