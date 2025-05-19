import Topnav from "./components/Topnav";
import Display from "./components/Display.jsx";
import Start from "./components/Start.jsx";
import {useState,useRef} from 'react'
export default function App() {

  const [isStarted, setIsStarted] = useState(false);

  const colorCount = useRef({
      red: 0,
      green: 0,
      blue: 0,
      yellow: 0,
    });
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-initial flex-col">
        <Topnav  />
      </div>

      <div className="  flex-1">
        {isStarted? <Display isStarted={isStarted} setIsStarted={setIsStarted}colorCount={colorCount}/> : <Start colorCount={colorCount} setIsStarted={setIsStarted} />}
      </div>
    </div>
  );
}
