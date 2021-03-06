import React from "react";

export const Input = (props) => {
  const { bgColor, color, borderSize, borderRadius, borderColor } = props;
  const styles = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    fontSize: 16,
    border: `${borderSize}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
    padding: 10,
    outline: "none",
  };
  return <input style={styles} label="label" />;
};

Input.defaultProps = {
  bgColor: "gray",
  color: "white",
  borderSize: 1,
  borderRadius: 5,
  borderColor: "white",
};
