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
        <h1>25 + 5 Clock</h1>
        <div id="break-label">
          <p className="label">Break Length</p>
          <button id="break-decrement" onClick={() => decrement(setBreakCount)}>
            <FaArrowDown />{" "}
          </button>
          <p id="break-length">{breakCount}</p>
          <button id="break-increment" onClick={() => increment(setBreakCount)}>
            <FaArrowUp />
          </button>
        </div>
        <div id="session-label">
          <p className="label">Session Length</p>
          <button
            id="session-decrement"
            onClick={() => decrement(setSessionCount)}
          >
            <FaArrowDown />{" "}
          </button>
          <p id="session-length">{sessionCount}</p>
          <button
            id="session-increment"
            onClick={() => increment(setSessionCount)}
          >
            <FaArrowUp />
          </button>
        </div>
        <div className="timer_wrap">
          <div className="timer">
            <p id="timer-label">Session</p>
            <p id="time-left"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
