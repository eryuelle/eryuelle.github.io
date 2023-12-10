import { useEffect, useState } from 'react';

export default function DayCountdown() {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const calculateTimeRemaining = (): number => {
    let now = new Date();
    let midnight = new Date();
    midnight.setUTCHours(24, 0, 0, 0);

    // Convert milliseconds to seconds
    return (midnight.getTime() - now.getTime()) / 1000;
  }

  const pad = (n: number): string => {
    return (n < 10 ? '0' : '') + n;
  }

  const formatDate = () => {
    let hours = pad(Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60)));
    let minutes = pad(Math.floor((timeRemaining % (60 * 60)) / (60)));
    let seconds = pad(Math.floor((timeRemaining % (60))));
    return `${hours}h ${minutes}m ${seconds}s`;
  }
 
  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining());
    let timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
 
    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      Day resets in {formatDate()} (5p.m. MT)
    </div>
  )
}
