import "../styles/App.css";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <div className="pomodoro">
        <h1>25 + 5 Clock</h1>
        <Break />
        <Session />
        <Timer />
      </div>
    </div>
  );
}

export default App;
