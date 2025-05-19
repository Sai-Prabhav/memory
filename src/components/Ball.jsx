import { useEffect, useState } from "react";

export default function Ball({ color, glow }) {
  const colorMap = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-400",
    white: "",
  };

  return (
    <div
      className={`p-4  flex w-1/4 aspect-square border-solid border-black rounded-full text-white ${
        glow ? "animate-bounce" : ""
      } ${colorMap[color]}`}
    ></div>
  );
}
