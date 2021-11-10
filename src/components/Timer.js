import "../styles/Timer.css";
import PlayIcon from "../assets/images/play_icon.png";
import PauseIcon from "../assets/images/pause_icon.png";
import DownloadIcon from "../assets/images/download_loop_recycle_repeat_icon.png";

function Timer({ sessionTime, breakTime, playTimer, resetTimer }) {
  return (
    <div className="pomodoro-session">
      <div className="pomodoro-session-label">
        <h2 id="timer-label">Session</h2>
        <span id="time-left">
          {sessionTime.minutes}:{sessionTime.seconds}
        </span>
      </div>
      <div className="pomodoro-button">
        <button id="start_stop" onClick={playTimer}>
          <img src={PlayIcon} alt="play icon" />
          <img src={PauseIcon} alt="pause icon" />
        </button>
        <button id="reset" onClick={resetTimer}>
          <img src={DownloadIcon} alt="download icon" />
        </button>
      </div>
    </div>
  );
}

export default Timer;
