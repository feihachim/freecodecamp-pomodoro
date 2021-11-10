const incrementSession = () => {
  return {
    type: "INCREMENT_SESSION",
  };
};

const decrementSession = () => {
  return {
    type: "DECREMENT_SESSION",
  };
};

const sessionAction = { incrementSession, decrementSession };

export default sessionAction;
