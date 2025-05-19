import { useState } from "react";

export default function Start({setIsStarted}) {
  return (
    <div className=" items-center h-full p-1 flex align-middle justify-center">
      <button className=" px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"type="button" onClick={()=>{setIsStarted(true)}}>Start </button>
    </div>
  );
}
