const modulePomodoro = (() => {
  function prependZero(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  function incrementBreak(state) {
    let result;
    if (state.breakLength < 60) {
      result = {
        ...state,
        breakLength: state.breakLength + 1,
      };
    } else {
      result = state;
    }
    return result;
  }

  function decrementBreak(state) {
    let result;
    if (state.breakLength > 1) {
      result = {
        ...state,
        breakLength: state.breakLength - 1,
      };
    } else {
      result = state;
    }
    return result;
  }

  function incrementSession(state) {
    let result;
    if (state.sessionLength < 60) {
      result = {
        ...state,
        sessionLength: state.sessionLength + 1,
      };
    } else {
      result = state;
    }
    return result;
  }

  function decrementSession(state) {
    let result;
    if (state.sessionLength > 1) {
      result = {
        ...state,
        sessionLength: state.sessionLength - 1,
      };
    } else {
      result = state;
    }
    return result;
  }

  return { incrementBreak, decrementBreak, incrementSession, decrementSession };
})();

export default modulePomodoro;
