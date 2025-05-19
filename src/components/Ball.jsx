import { useEffect, useState } from "react";
import {colorMap} from './colors';

export default function Ball({ color, glow }) {


  return (
    <div
      className={`p-4  flex w-1/4 aspect-square border-solid border-black rounded-full text-white ${
        glow ? "animate-bounce" : ""
      } ${colorMap[color]}`}
    ></div>
  );
}
