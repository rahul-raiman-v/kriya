import React from 'react';
import { TimeUnit } from '..';

export const EventTimer = ({ targetDate }) => {
  const calculateTimeLeft = React.useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  const hasTimeLeft = Object.values(timeLeft).some((value) => value > 0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft, targetDate]);
  return (
    <div className="text-center ">
      <h2 className="text-3xl md:text-5xl font-bold text-gradient leading-relaxed mb-2">
        Registration Ends In
      </h2>
      <p className="md:text-xl text-lg text-slate-600 max-w-3xl md:mx-auto mx-3">
        Join us for an exciting event! The countdown has begun. Don't miss out!
      </p>

      {hasTimeLeft ? (
        <div className="bg-white md:p-16 mt-8 rounded-lg w-fit md:mx-auto p-6 mx-6">
          <div className="flex justify-center items-center gap-4 md:gap-4 flex-wrap">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      ) : (
        <div className="bg-white py-16 px-44 mt-8 rounded-lg w-fit mx-auto">
          <div className=" bg-gray-600 hover:opacity-75 cursor-pointer text-white font-bold py-4 px-8 rounded-lg shadow-xl mx-auto w-fit">
            <h3 className="text-2xl">Registration Closed 🔒</h3>
          </div>
        </div>
      )}
    </div>
  );
};
