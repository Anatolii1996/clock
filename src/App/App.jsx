import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import "./App.scss";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Timer from "../Timer/Timer";

import { HiPlayPause } from "react-icons/hi2";
import { MdRestartAlt } from "react-icons/md";

function App() {
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);
  const [expiryTimestamp, setExpiryTimestamp] = useState(null);
  const [isTimerRun, setIsTimerRun] = useState(false);
  const [isRestart, setIsRestart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isResume, setIsResume] = useState(false);

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + sessionCount * 60);
    setExpiryTimestamp(time);
  }, [sessionCount]);

  //  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
  //   useTimer({ expiryTimestamp, autoStart: false });

  const increment = (arg) => {
    arg((prev) => {
      if (prev == 60) {
        return prev;
      } else {
        return prev + 1;
      }
    });
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
          <button
            id="break-decrement"
            onClick={() => decrement(setBreakCount)}
            disabled={isTimerRun}
          >
            <FaArrowDown />{" "}
          </button>
          <p id="break-length">{breakCount}</p>
          <button
            id="break-increment"
            onClick={() => increment(setBreakCount)}
            disabled={isTimerRun}
          >
            <FaArrowUp />
          </button>
        </div>
        <div id="session-label">
          <p className="label">Session Length</p>
          <button
            id="session-decrement"
            onClick={() => decrement(setSessionCount)}
            disabled={isTimerRun}
          >
            <FaArrowDown />{" "}
          </button>
          <p id="session-length">{sessionCount}</p>
          <button
            id="session-increment"
            onClick={() => increment(setSessionCount)}
            disabled={isTimerRun}
          >
            <FaArrowUp />
          </button>
        </div>
        <div className="timer_wrap">
          <div className="timer">
            {expiryTimestamp && (
              <Timer
                expiryTimestamp={expiryTimestamp}
                setIsTimerRun={setIsTimerRun}
                // setSessionCount={setSessionCount}
                // setBreakCount={setBreakCount}
                breakCount={breakCount}
                sessionCount={sessionCount}
                isRestart={isRestart}
                isPause={isPause}
                isResume={isResume}
              />
            )}
          </div>
          <div className="buttons">
            <button
              id="start_stop"
              onClick={() => {
                // console.log(isRunning);
                if (!isTimerRun) {
                  setIsResume(true)
                  
                } else {
                  setIsPause(true)

                 
                }
              }}
            >
              <HiPlayPause />
            </button>

            <button
              id="reset"
              onClick={() => {
                setIsRestart(true);
                setSessionCount(25);
                setBreakCount(5);
              }}
            >
              <MdRestartAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
