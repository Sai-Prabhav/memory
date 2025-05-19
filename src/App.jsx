import Topnav from "./components/Topnav";
import Display from "./components/Display.jsx";
import Start from "./components/Start.jsx";
import {useState} from 'react'
export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-initial flex-col">
        <Topnav  />
      </div>

      <div className="  flex-1">
        {isStarted? <Display isStarted={isStarted} /> : <Start setIsStarted={setIsStarted} />}
      </div>
    </div>
  );
}
