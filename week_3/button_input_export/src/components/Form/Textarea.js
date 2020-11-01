import React from "react";

export const Textarea = (props) => {
  const { bgColor, color, borderSize, borderRadius, borderColor } = props;
  const styles = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    fontSize: 16,
    outline: "none",
    margin: "15px 0",
    border: `${borderSize}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
    padding: 10,
  };

  return <textarea style={styles} rows="4" cols="50"></textarea>;
};

Textarea.defaultProps = {
  bgColor: "gray",
  color: "white",
  borderSize: 1,
  borderRadius: 5,
  borderColor: "white",
};
