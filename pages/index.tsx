import { ReactNode, useState, useEffect } from 'react';

import IconList from '../src/components/icon-list/icon-list';
import {
  AR_DAILIES, AR_DAILIES_ORDER,
  B_DAILIES, B_DAILIES_ORDER,
  T_DAILIES, T_DAILIES_ORDER,
} from '../src/config/dailies';
import {
  AR_WEEKLIES, AR_WEEKLIES_ORDER,
  T_WEEKLIES, T_WEEKLIES_ORDER,
} from '../src/config/weeklies';

// TODO: Move this to its own component?
function DayCountdown() {
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
      Day resets in {formatDate()} (5pm MT)
    </div>
  )
}

interface TabRowProps {
  tabs: { [key: string]: ReactNode };
}

// TODO: Also move this to its own component?
function TabRow({ tabs }: TabRowProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabClick = (idx: number) => {
    setSelectedTab(idx);
   };

  const generateTabs = () => {
    const keys = Object.keys(tabs);
    return keys.map((ele, idx) => {
      return (
        <div
          className={`text-center w-150 bordered pointer padding-4 ${selectedTab === idx ? 'bg-lightgray' : ''}`}
          onClick={() => onTabClick(idx)}
        >
          {ele}
        </div>
      );
    });
  }

  const displayContent = (): ReactNode => {
    const keys = Object.keys(tabs);
    return tabs[keys[selectedTab]];
  }
  

  return (
    <>
      <div className="flex space-evenly tmargin-8">
        { generateTabs() }
      </div>
      { displayContent() }
    </>
  )
}

export default function Index() {
  const tabs = {
    "Dailies": (
      <>
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
    ),
    "Sunday Reset": (
      <>
        <IconList
          bordered={true}
          title="Misc. Tasks"
          items={T_WEEKLIES_ORDER}
          dictionary={T_WEEKLIES()}
        />
        <IconList
          compact={true}
          bordered={true}
          title="Arcane River"
          items={AR_WEEKLIES_ORDER}
          dictionary={AR_WEEKLIES()}
        />
      </>
    ), 
    "Wednesday Reset": (
      <>
        <div className="tmargin-8">
          Check out the <a href="/bosses">Bosses</a> tab!
        </div>
      </>
    ),
  };
  
  return (
    <>
      <h1>Chores</h1>
      <DayCountdown />
      <TabRow tabs={tabs} />
    </>
  )
}
