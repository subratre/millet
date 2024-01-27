import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const difference = +new Date("2024-02-12") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1000 * 60 * 60)) % 24,
      minutes: Math.floor(difference / 1000 / 60) % 60,
      seconds: Math.floor(difference / 1000) % 60,
    };
  }

  return timeLeft;
};

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <span className="text-[green]">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      {timeComponents.length ? (
        timeComponents
      ) : (
        <span className="text-[red] text-[25px]">Time's up!</span>
      )}
    </div>
  );
};

export default CountDown;
