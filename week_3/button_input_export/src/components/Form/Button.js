import React from "react";

function Button(props) {
  const { label, bgColor, color } = props;

  const styles = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    fontSize: 16,
    border: "none",
    borderRadius: 5,
    padding: 10,
    letterSpacing: 1,
  };

  return <button style={styles}>{label}</button>;
}

Button.propsDefault = {
  label: "click me",
  bgColor: "darkBlue",
  color: "white",
};

export default Button;
