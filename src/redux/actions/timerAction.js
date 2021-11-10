const playTimer = () => {
  return {
    type: "START_STOP",
  };
};

const resetTimer = () => {
  return {
    type: "RESET",
  };
};

const timerAction = { playTimer, resetTimer };

export default timerAction;
