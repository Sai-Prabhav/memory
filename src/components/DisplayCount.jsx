import React from "react";
import DisplayColorCount from "./DisplayColorCount";

function DisplayCount({ colorCount }) {
  const score = Object.entries(colorCount.current);
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full ">
      {score.map(([colorName, count]) =>
        count !== 0 ? (
          <div
            className="flex flex-col items-center justify-center w-32"
            key={colorName}
          >
            <DisplayColorCount
              key={colorName}
              color={colorName}
              count={count}
            />
          </div>
        ) : null
      )}
    </div>
  );
}

export default DisplayCount;
