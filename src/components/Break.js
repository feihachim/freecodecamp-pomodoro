import "../styles/Break.css";

function Break({ value, setBreak }) {
  function decrementBreak(e) {
    if (value > 1) {
      setBreak(value - 1);
    }
  }
  function incrementBreak(e) {
    if (value < 60) {
      setBreak(value + 1);
    }
  }
  return (
    <div className="break-element">
      <h2 id="break-label">Break Length</h2>
      <span>
        <button id="break-decrement" onClick={decrementBreak}>
          &#129075;
        </button>
        <h3 id="break-length">{value}</h3>
        <button id="break-increment" onClick={incrementBreak}>
          &#129073;
        </button>
      </span>
    </div>
  );
}

export default Break;
