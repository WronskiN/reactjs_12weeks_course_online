import React from 'react';

export const sum = (a, b) => {
  return a + b;
};

export default function Sum() {
  return <div>{sum(5, 5)}</div>;
}
