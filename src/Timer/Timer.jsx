import React, { useEffect, useState } from "react";
import "./Timer.scss";
import { useTimer } from "react-timer-hook";

const Timer = ({
  expiryTimestamp,
  setIsTimerRun,
  breakCount,
  sessionCount,
  isRestart,
  isPause,
  isResume,
}) => {
  const [isBreakTime, setIsBreakTime] = useState(false);

  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({ expiryTimestamp, autoStart: false });

  useEffect(() => {
    restart(expiryTimestamp, false);
  }, [expiryTimestamp, restart]);

  useEffect(() => {
    if (isRestart) {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 1500);
      restart(time, false);
    }
  }, [isRestart]);

  useEffect(() => {
    if (isPause) {
      pause();
      setIsTimerRun(false);
    }else{
      resume();
      setIsTimerRun(true);
    }
  }, [isPause]);



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

  return (
    <div className="time_wrap">
      <div id="time-left">
        <div className={` ${minutes < 1 && seconds < 60 ? "red_count" : ""}`}>
          {isBreakTime ? (
            <p id="timer-label">Break</p>
          ) : (
            <p id="timer-label">Session</p>
          )}
          <p className="timer_count">
            <span>{formattedMinutes}</span>:<span>{formattedSeconds}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
