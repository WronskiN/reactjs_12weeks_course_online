import React from "react";

const styles = {
  padding: 20,
  textAlign: "left",
};

function ExtendContent({ paragraph, title }) {
  return (
    <div style={styles}>
      <h3>{title}</h3>
      {paragraph.map((el, index) => (
        <p key={`text-${index}`} className="paragraph">
          {el}
        </p>
      ))}
    </div>
  );
}

export { ExtendContent };
