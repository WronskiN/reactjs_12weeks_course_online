import React from "react";

const styles = {
  fontSize: 15,
  color: "gray",
  padding: 10,
  textAlign: "left",
};

const contentText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.quasi, adipisci, dolore rerum, distinctio molestiae repellat solutaarchitecto nostrum facere? Hic quibusdam asperiores aspernatur";

function Description() {
  return <div style={styles}>{contentText}</div>;
}

export { Description };
