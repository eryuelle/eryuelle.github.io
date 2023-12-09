import { useState, useEffect } from 'react';

import IconList from '../src/components/icon-list/icon-list';
import {
  AR_DAILIES, AR_DAILIES_ORDER,
  B_DAILIES, B_DAILIES_ORDER,
  T_DAILIES, T_DAILIES_ORDER,
} from '../src/config/dailies';

function DayCountdown() {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const calculateTimeRemaining = (): number => {
    let now = new Date();
    let midnight = new Date();
    midnight.setUTCHours(24, 0, 0, 0);
    console.log(midnight.getTime() - now.getTime())

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
      Day resets in {formatDate()} (5pm MT)
    </div>
  )
}

export default function Index() {
  return (
    <>
      <h1>Dailies</h1>
      <DayCountdown />
      <IconList
        bordered={true}
        compact={true}
        title="Arcane River"
        items={AR_DAILIES_ORDER}
        dictionary={AR_DAILIES()}
      />
      <IconList
        compact={true}
        title="Misc. Tasks"
        items={T_DAILIES_ORDER}
        dictionary={T_DAILIES()}
      />
      <IconList
        compact={true}
        title="Bosses"
        items={B_DAILIES_ORDER}
        dictionary={B_DAILIES()}
      />
    </>
  )
}
