import React from "react";
import coverImage from "./assets/paella.jpg";

const styles = {
  width: "100%",
  height: "40%",
};
const Image = () => {
  return (
    <div style={styles}>
      <img src={coverImage} alt="Paella course" />
    </div>
  );
};

export { Image };
