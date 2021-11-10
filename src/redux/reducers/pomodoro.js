import modulePomodoro from "../../logic/pomodoro";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
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
    default:
      return state;
  }
}

export default pomodoro;
