import modulePomodoro from "../../logic/pomodoro";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  breakTime: {
    minutes: "05",
    seconds: "00",
  },
  sessionTime: {
    minutes: "25",
    seconds: "00",
  },
};

function pomodoro(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_BREAK":
      return modulePomodoro.incrementBreak(state);
    case "DECREMENT_BREAK":
      return modulePomodoro.decrementBreak(state);
    case "INCREMENT_SESSION":
      return modulePomodoro.incrementSession(state);
    case "DECREMENT_SESSION":
      return modulePomodoro.decrementSession(state);
    case "START_STOP":
      return modulePomodoro.playTimer(state);
    case "RESET":
      return modulePomodoro.resetTimer(state);
    default:
      return state;
  }
}

export default pomodoro;
