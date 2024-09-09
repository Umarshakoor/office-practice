import { useState, useEffect } from "react";
import "./countdown.css";

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
    <div className="wrapper">
      <div className="text-wrapper">
        <h4>Countdown</h4>
      </div>

      <div className="label-input">
        <div className="hours">
          <label>HH</label>
          <input value={hours} onChange={handleHours} />
        </div>
        <div className="minutes">
          <label>MM</label>
          <input value={minutes} onChange={handleMinutes} />
        </div>
        <div className="seconds">
          <label>SS</label>
          <input value={seconds} onChange={handleSeconds} />
        </div>
        <div className="milliseconds">
          <label>MS</label>
          <input value={milliseconds} />
        </div>
      </div>
      <div className="btn-wrapper">
        <div>
          {!isRunning && (
            <button className="start" onClick={startTimer}>
              Start
            </button>
          )}
          {isRunning && (
            <button className="puase" onClick={puaseTime}>
              Puase
            </button>
          )}
        </div>
        <div>
          <button className="stop" onClick={stopTimer}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
