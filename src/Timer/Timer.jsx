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
}) => {
  const [isPayse, setIsPayse] = useState(true);

  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({ expiryTimestamp, autoStart: false });

  useEffect(() => {
    restart(expiryTimestamp, false);
  }, [expiryTimestamp, restart]);

  useEffect(() => {
    setIsTimerRun(isRunning);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      const time = new Date();
      time.setSeconds(time.getSeconds() + breakCount * 60);
      setTimeout(() => {
        restart(time.getTime(), true);
      }, 1000);
    }
  }, [minutes, seconds, breakCount, restart]);

  const formattedMinutes =
    hours > 0 ? "60" : minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  console.log(seconds);

  return (
    <div className="time_wrap">
      <div id="time-left" style={{ fontSize: "80px" }}>
        <span>{formattedMinutes}</span>:<span>{formattedSeconds}</span>
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
