import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';


const Timer = ({ expiryTimestamp }) => {
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, autoStart: false });

    useEffect(() => {
        console.log(isRunning+"1111")

        restart(expiryTimestamp);
        console.log(isRunning+"22222")
    }, [expiryTimestamp, restart]);

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    console.log(isRunning+"33333")
    return (
        <div style={{ textAlign: 'center' }}>

            <div style={{ fontSize: '80px' }}>
                <span>{formattedMinutes}</span>:<span>{formattedSeconds}</span>
            </div>

            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 300);
                restart(time)
            }}>Restart</button>
        </div>
    );
}


export default Timer;
