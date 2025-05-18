import Topnav from "./components/Topnav";
import Display from "./components/Display.jsx";
import Start from "./components/Start.jsx";
export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-initial flex-col">
        <Topnav />
      </div>

      <div className="  flex-1">
        <Start />
      </div>
    </div>
  );
}
