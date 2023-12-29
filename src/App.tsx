import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const startTimer = () => {
    const countDownDate = new Date("December 29 2023 23:04:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days.toString());
        setTimerHours(hours.toString());
        setTimerMinutes(minutes.toString());
        setTimerSeconds(seconds.toString());
      }
    }, 1000);

    return interval;
  };

  useEffect(() => {
    const interval = startTimer();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="timer-icon bi bi-calendar-date"></span>
          <h2>Countdown timer</h2>
          <p>Countdown to a really special event</p>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default App;
