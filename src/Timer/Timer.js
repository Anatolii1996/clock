import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';


const Timer = ({ expiryTimestamp }) => {
    

    const {
        seconds,
        minutes,
       
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, autoStart: false });

    useEffect(() => {
        restart(expiryTimestamp, false);
       

    }, [expiryTimestamp, restart]);

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
   
    return (
        <div style={{ textAlign: 'center' }}>

            <div style={{ fontSize: '80px' }}>
                <span>{formattedMinutes}</span>:<span>{formattedSeconds}</span>
            </div>

            {/* <button onClick={start}>Start</button> */}
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
