import React from "react";
import { colorMap } from "./colors";

function DisplayColorCount({ color, count }) {
  return (
    <div className="flex items-center justify-evenly w-full">
      <div className={` w-14 flex  rounded-full border aspect-square  ${colorMap[color]}`}>{}</div>
      <div>{count}</div>
    </div>
  );
}

export default DisplayColorCount;
