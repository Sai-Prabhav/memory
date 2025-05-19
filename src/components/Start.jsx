import { useState } from "react";
import CustomButton from "./CustomButton";
import DisplayCount from "./DisplayCount";
export default function Start({ setIsStarted, colorCount }) {
  return (
    <div className=" items-center h-full p-1 flex align-middle justify-center">
      <CustomButton
        onClick={() => {
          setIsStarted(true);
        }}
      >
        Start
      </CustomButton>
      <DisplayCount colorCount={colorCount}/>
    </div>
  );
}
