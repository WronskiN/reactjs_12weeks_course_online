import React from "react";
import { articleStyles, introStyles, titleStyles } from "./styles";

export const BlogTile = function ({ title, intro }) {
  return (
    <article style={articleStyles}>
      <h2 style={titleStyles}>{title}</h2>
      <p style={introStyles}>{intro}</p>
    </article>
  );
};
