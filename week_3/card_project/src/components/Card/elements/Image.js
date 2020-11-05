import React from "react";

const styles = {
  width: "100%",
  height: "40%",
};
const Image = ({ image }) => {
  return (
    <div style={styles}>
      <img src={image} alt="Paella course" />
    </div>
  );
};

export { Image };
