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
        breakTime: {
          minutes: prependZero(state.breakLength + 1),
          seconds: state.breakTime.seconds,
        },
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
        breakTime: {
          minutes: prependZero(state.breakLength - 1),
          seconds: state.breakTime.seconds,
        },
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
        sessionTime: {
          minutes: prependZero(state.sessionLength + 1),
          seconds: state.sessionTime.seconds,
        },
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
        sessionTime: {
          minutes: prependZero(state.sessionLength - 1),
          seconds: state.sessionTime.seconds,
        },
      };
    } else {
      result = state;
    }
    return result;
  }

  function playTimer(state) {
    return state;
  }

  function resetTimer(state) {
    return {
      ...state,
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
  }

  return {
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
    playTimer,
    resetTimer,
  };
})();

export default modulePomodoro;
