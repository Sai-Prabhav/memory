import { useState } from "react";
import CustomButton from "./CustomButton";
import DisplayCount from "./DisplayCount";
export default function Start({ setIsStarted, colorCount }) {
  return (
    <div className="flex flex-col items-center justify-center p-1 w-full h-full">
      <CustomButton
        onClick={() => {
          setIsStarted(true);
          const resetColorCount = {};
          Object.keys(colorCount).forEach((color) => {
            resetColorCount[color] = 0;
          });
          colorCount = resetColorCount;
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
