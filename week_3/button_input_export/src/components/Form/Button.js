import React from "react";

export function Button(props) {
  const { icon, label, bgColor, color } = props;

  const styles = {
    width: "50%",
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    fontSize: 16,
    border: "none",
    borderRadius: 5,
    padding: 10,
    letterSpacing: 1,
    cursor: "pointer",
    margin: "0 auto",
  };

  return (
    <div>
      <button style={styles}>
        {icon} {label}
      </button>
    </div>
  );
}

Button.defaultProps = {
  label: "click me",
  bgColor: "black",
  color: "white",
};
