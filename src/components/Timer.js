import "../styles/Timer.css";
import PlayIcon from "../assets/images/play_icon.png";
import PauseIcon from "../assets/images/pause_icon.png";
import DownloadIcon from "../assets/images/download_loop_recycle_repeat_icon.png";

function Timer({ minutes, setBreak, setSession }) {
  function prependZero(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }
  function displayTime() {
    console.log("boo");
  }
  function handlePlay(e) {}
  function handleReset(e) {
    setBreak(5);
    setSession(25);
    pomodoroSeconds = prependZero(0);
  }
  let pomodoroMinutes = minutes;
  let pomodoroSeconds = prependZero(0);
  return (
    <div className="pomodoro-session">
      <div className="pomodoro-session-label">
        <h2 id="timer-label">Session</h2>
        <span id="time-left">
          {pomodoroMinutes}:{pomodoroSeconds}
        </span>
      </div>
      <div className="pomodoro-button">
        <button id="start_stop" onClick={handlePlay}>
          <img src={PlayIcon} alt="play icon" />
          <img src={PauseIcon} alt="pause icon" />
        </button>
        <button id="reset" onClick={handleReset}>
          <img src={DownloadIcon} alt="download icon" />
        </button>
      </div>
    </div>
  );
}

export default Timer;
