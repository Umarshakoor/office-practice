import { useState, useEffect } from "react";

function CountDown() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        }
      }, 10);
    }

    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, hours, isRunning]);

  const handleSeconds = (e) => {
    setSeconds(e.target.value);
  };
  const handleMinutes = (e) => {
    setMinutes(e.target.value);
  };
  const handleHours = (e) => {
    setHours(e.target.value);
  };
  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
      setIsRunning(true);
    } else {
      window.alert("Add Time.");
    }
  }

  const puaseTime = () => {
    setIsRunning(false);
  };

  function stopTimer() {
    resetTimer();
  }

  function resetTimer() {
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }
  return (
    <div>
      <h4>Countdown</h4>
      <div>
        <label>hh</label>
        <input value={hours} onChange={handleHours} />
      </div>
      <div>
        <label>mm</label>
        <input value={minutes} onChange={handleMinutes} />
      </div>
      <div>
        <label>ss</label>
        <input value={seconds} onChange={handleSeconds} />
      </div>
      <div>
        <label>mm</label>
        <input value={milliseconds} />
      </div>
      {!isRunning && <button onClick={startTimer}>start</button>}
      {isRunning && <button onClick={puaseTime}>puase</button>}
      <div>
        <button onClick={stopTimer}>stop</button>
      </div>
    </div>
  );
}

export default CountDown;
