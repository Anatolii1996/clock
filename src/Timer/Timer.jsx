import React, { useEffect, useState } from "react";
import "./Timer.scss";
import { useTimer } from "react-timer-hook";
import { HiPlayPause } from "react-icons/hi2";
import { MdRestartAlt } from "react-icons/md";

const Timer = ({
  expiryTimestamp,
  setIsTimerRun,
  setSessionCount,
  setBreakCount,
  breakCount,
  sessionCount
}) => {
  const [isPayse, setIsPayse] = useState(true);
  const [isBreakTime, setIsBreakTime] = useState(false);

  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({ expiryTimestamp, autoStart: false });

  useEffect(() => {
    restart(expiryTimestamp, false);
  }, [expiryTimestamp, restart]);

  useEffect(() => {
    setIsTimerRun(isRunning);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 0 && minutes === 0 && !isBreakTime) {
      const time = new Date();
      time.setSeconds(time.getSeconds() + breakCount * 60);
      setTimeout(() => {
        setIsBreakTime(true);
        restart(time.getTime(), true);
      }, 1000);
    }
  }, [minutes, seconds, breakCount, restart]);

  useEffect(() => {
    if (seconds === 0 && minutes === 0 && isBreakTime) {
      const time = new Date();
      time.setSeconds(time.getSeconds() + sessionCount * 60);
      setTimeout(() => {
        setIsBreakTime(false);
        restart(time.getTime(), true);
      }, 1000);
    }
  }, [minutes, seconds, sessionCount, restart]);

  const formattedMinutes =
    hours > 0 ? "60" : minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  //   console.log(seconds);

  return (
    <div className="time_wrap">
      <div id="time-left">
        {isBreakTime ? (
          <p id="timer-label">Break</p>
        ) : (
          <p id="timer-label">Session</p>
        )}
        <p style={{ fontSize: "80px" }}>
          <span>{formattedMinutes}</span>:<span>{formattedSeconds}</span>
        </p>
      </div>

      <button
        id="start_stop"
        onClick={() => {
          if (isPayse) {
            resume();
            setIsPayse(false);
          } else {
            pause();
            setIsPayse(true);
          }
        }}
      >
        <HiPlayPause />
      </button>

      <button
        id="reset"
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 1500);
          restart(time, false);
          setSessionCount(25);
          setBreakCount(5);
        }}
      >
        <MdRestartAlt />
      </button>
    </div>
  );
};

export default Timer;
