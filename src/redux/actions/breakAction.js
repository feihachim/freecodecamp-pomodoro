const incrementBreak = () => {
  return {
    type: "INCREMENT_BREAK",
  };
};

const decrementBreak = () => {
  return {
    type: "DECREMENT_BREAK",
  };
};

const breakAction = { incrementBreak, decrementBreak };

export default breakAction;
