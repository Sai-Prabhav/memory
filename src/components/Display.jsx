import { useState, useEffect, useRef } from "react";
import Ball from "./Ball";
import {colorMap} from './colors';
export default function Display({ isStarted, colorCount, setIsStarted }) {
  const [color, setColor] = useState("white");
  const [glow, setGlow] = useState(false);
  const totalColorCount = useRef(0);
  const level = 1;
  

  const colors = ["red", "green", "blue", "yellow"];
  useEffect(() => {
    const interval = setInterval(() => {
      setGlow(true);
      const glowTimeout = setTimeout(() => setGlow(false), 500);

      const random =
        colors[Math.floor(Math.random() * (colors.length - (3 - level)))];
      colorCount.current[random]++;
      totalColorCount.current++;
      setColor(random);
      console.log(colorCount, totalColorCount.current);

      if (
        totalColorCount.current >=
        Math.floor((level * 4 + 4) * (1 + 2 * Math.random()))
      ) {
        clearInterval(interval);
        setIsStarted(false);
        setColor("white");
        setGlow(false);
      }
      return () => {
        clearTimeout(glowTimeout);
      };
    }, 1000 + 500 / level); // every 1 second

    return () => {
      clearInterval(interval);
    }; // cleanup when unmounted
  }, []);
  return (
    <div className=" items-center h-full p-1 flex align-middle justify-center">
      <Ball color={color} glow={glow} />
    </div>
  );
}
