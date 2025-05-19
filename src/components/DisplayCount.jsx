import React from "react";
import DisplayColorCount from "./DisplayColorCount";

function DisplayCount({ colorCount }) {
  const score = Object.entries(colorCount.current);
  return (
    <div>
      {score.map(([colorName, count]) =>
        count !== 0 ? (
          <DisplayColorCount key={colorName} color={colorName} count={count} />
        ) : null
      )}
    </div>
  );
}

export default DisplayCount;
