import React from "react";

const styles = {
  fontSize: 15,
  color: "gray",
  padding: 10,
  textAlign: "left",
};

function Description({ description }) {
  return <div style={styles}>{description}</div>;
}

export { Description };
