import "../styles/Session.css";

function Session({ value, setSession }) {
  function decrementSession(e) {
    if (value > 1) {
      setSession(value - 1);
    }
  }
  function incrementSession(e) {
    if (value < 60) {
      setSession(value + 1);
    }
  }
  return (
    <div className="session-element">
      <h2 id="session-label">Session Length</h2>
      <span>
        <button id="session-decrement" onClick={decrementSession}>
          &#129075;
        </button>
        <h3 id="session-length">{value}</h3>
        <button id="session-increment" onClick={incrementSession}>
          &#129073;
        </button>
      </span>
    </div>
  );
}

export default Session;
