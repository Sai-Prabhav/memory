import { useState } from "react";

export default function Display() {
  const [color, setColor] = useState("white");
  const colorMap = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-400",
    white: "",
  };
  return (
    <div className=" items-center h-full p-1 flex align-middle justify-center">
      <div
        className={`p-4  flex w-1/4 aspect-square border-solid border-black rounded-full text-white ${colorMap[color]}`}
      ></div>
    </div>
  );
}
