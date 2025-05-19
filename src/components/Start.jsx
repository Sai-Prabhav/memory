import { useState } from "react";
import CustomButton from "./CustomButton";
import DisplayCount from "./DisplayCount";
export default function Start({ setIsStarted, colorCount, totalColorCount }) {
  return (
    <div className="flex flex-col items-center justify-center p-1 w-full h-full">
      <CustomButton
        onClick={() => {
          setIsStarted(true);
          const resetColorCount = {};
          totalColorCount.current = 0;
          Object.keys(colorCount.current).forEach((color) => {
            resetColorCount[color] = 0;
            console.log(resetColorCount, "insede");
          });

          colorCount.current = resetColorCount;
          console.log(resetColorCount, colorCount);
        }}
      >
        Start
      </CustomButton>
      <div className="mt-4">
        <DisplayCount colorCount={colorCount} />
      </div>
    </div>
  );
}
