import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";

function App() {
  const breakLength = useSelector((state) => {
    console.log(state.pomodoro.breakLength);
    return state.pomodoro.breakLength;
  });
  const sessionLength = useSelector((state) => {
    console.log(state.pomodoro.sessionLength);
    return state.pomodoro.sessionLength;
  });
  const sessionTime = useSelector((state) => {
    console.log(state.pomodoro.sessionTime);
    return state.pomodoro.sessionTime;
  });
  const breakTime = useSelector((state) => {
    console.log(state.pomodoro.breakTime);
    return state.pomodoro.breakTime;
  });
  const dispatch = useDispatch();
  function incrementBreak(e) {
    dispatch(allActions.breakAction.incrementBreak());
  }
  function decrementBreak(e) {
    dispatch(allActions.breakAction.decrementBreak());
  }
  function incrementSession(e) {
    dispatch(allActions.sessionAction.incrementSession());
  }
  function decrementSession(e) {
    dispatch(allActions.sessionAction.decrementSession());
  }
  function playTimer(e) {
    dispatch(allActions.timerAction.playTimer());
    console.log("playtime");
  }
  function resetTimer(e) {
    dispatch(allActions.timerAction.resetTimer());
    console.log("resetTime");
  }
  return (
    <div className="App">
      <div className="pomodoro">
        <h1>25 + 5 Clock</h1>
        <div className="pomodoro-set">
          <Break
            value={breakLength}
            increment={incrementBreak}
            decrement={decrementBreak}
          />
          <Session
            value={sessionLength}
            increment={incrementSession}
            decrement={decrementSession}
          />
        </div>
        <Timer
          sessionTime={sessionTime}
          breakTime={breakTime}
          playTimer={playTimer}
          resetTimer={resetTimer}
        />
      </div>
    </div>
  );
}

export default App;
