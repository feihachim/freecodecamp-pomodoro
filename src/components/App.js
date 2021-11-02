import "../styles/App.css";
import { useState } from "react";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";

function App() {
  const [sessionBreak, setSessionBreak] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  return (
    <div className="App">
      <div className="pomodoro">
        <h1>25 + 5 Clock</h1>
        <div className="pomodoro-set">
          <Break value={sessionBreak} setBreak={setSessionBreak} />
          <Session value={sessionTime} setSession={setSessionTime} />
        </div>
        <Timer
          minutes={sessionTime}
          setBreak={setSessionBreak}
          setSession={setSessionTime}
        />
      </div>
    </div>
  );
}

export default App;
