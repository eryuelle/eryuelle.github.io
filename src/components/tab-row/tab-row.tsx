import { ReactNode, useState } from 'react';

interface TabRowProps {
  tabs: { [key: string]: ReactNode };
}

export default function TabRow({ tabs }: TabRowProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabClick = (idx: number) => {
    setSelectedTab(idx);
   };

  const generateTabs = () => {
    const keys = Object.keys(tabs);
    return keys.map((ele, idx) => {
      return (
        <div
          className={`text-center w-150 bordered pointer padding-6 ${selectedTab === idx ? 'bg-lightgray' : ''}`}
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
