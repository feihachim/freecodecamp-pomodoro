import "../styles/Break.css";

function Break({ value, increment, decrement }) {
  return (
    <div className="break-element">
      <h2 id="break-label">Break Length</h2>
      <span>
        <button id="break-decrement" onClick={decrement}>
          &#129075;
        </button>
        <h3 id="break-length">{value}</h3>
        <button id="break-increment" onClick={increment}>
          &#129073;
        </button>
      </span>
    </div>
  );
}

export default Break;
