import React, { useState } from "react";
import "./App.scss";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function App() {
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);

  const increment = (arg) => {
    arg((prev) => prev + 1);
  };

  const decrement = (arg) => {
    arg((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div id="break-label">
          <p className="label">Break Length</p>
          <button onClick={()=>decrement(setBreakCount)}>
            <FaArrowDown />{" "}
          </button>
          <p className="count">{breakCount}</p>
          <button onClick={() => increment(setBreakCount)}>
            <FaArrowUp />
          </button>
        </div>
        <div id="session-label">
          <p className="label">Session Length</p>
          <button onClick={()=>decrement(setSessionCount)}>
            <FaArrowDown />{" "}
          </button>
          <p className="count">{sessionCount}</p>
          <button onClick={() => increment(setSessionCount)}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
