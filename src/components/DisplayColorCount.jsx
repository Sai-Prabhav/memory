import React from "react";

function DisplayColorCount({ color, count }) {
  return (
    <div>
      <div>{color}</div>
      <div>{count}</div>
    </div>
  );
}

export default DisplayColorCount;
