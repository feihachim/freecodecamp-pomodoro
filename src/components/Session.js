import "../styles/Session.css";

function Session({ value, increment, decrement }) {
  return (
    <div className="session-element">
      <h2 id="session-label">Session Length</h2>
      <span>
        <button id="session-decrement" onClick={decrement}>
          &#129075;
        </button>
        <h3 id="session-length">{value}</h3>
        <button id="session-increment" onClick={increment}>
          &#129073;
        </button>
      </span>
    </div>
  );
}

export default Session;
