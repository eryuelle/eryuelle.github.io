import IconList from '../src/components/icon-list/icon-list';
import IconListCounter from '../src/components/icon-list-counter/icon-list-counter';
import TabRow from '../src/components/tab-row/tab-row';
import {
  BOSSES, BOSSES_ORDER, MESOS_ORDER
} from '../src/config/bosses';

import React, { useState } from "react";

interface DropdrownProps {
  items: string[];
  dictionary: { [key: string]: Boss };
  update: () => void;
}

const Dropdown = ({ items, dictionary, update }: DropdrownProps) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const select = (name: string) => {
    return () => {
      if (dictionary[name].selected === undefined) {
        dictionary[name].selected = true;
      } else {
        dictionary[name].selected = !dictionary[name].selected;
      }
      update();
      setIsOpen(!isOpen);
    }
  }

  const options = () => {
    return items.map((item) => {
      const i = dictionary[item];

      return (
        <div className={`flex gap-4 padding-1-2 ${i.selected ? 'selected' : ''}`} onClick={select(i.name)}>
          <div className="icon-cage-20">
            <img className="icon" src={i.icon} />
          </div>
          
            <div className="dropdown-name">
              {i.abbreviated !== undefined ? i.abbreviated : i.name}
            </div>
        </div>
      );
    });
  }
 
  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleOpen}>Add Bosses <img className="caret-down" src="/icons/common/caret-down.png" /></button>
      {isOpen && (
        <div className="dropdown-content">
          { options() }
        </div>
      )}
    </div>
  );
};

function Damage({ items, dictionary }: DamageProps) {
  const [version, setVersion] = useState(0);

  const bumpVersion = () => {
    setVersion(version + 1);
  }

  const table = () => {
    return items.filter((item) => {
      return dictionary[item].selected;
    }).map((item) => {
      const i = dictionary[item];
      return (
        <tr>
          <td>{i.name}</td>
          <td>{i.fullHP}</td>
          <td>{i.dr}</td>
        </tr>
      );
    });
  }

  return (
    <div className="tmargin-8">
      <h2>Damage Calculator</h2>
      <table>
        <thead className="bold">
          <td>Name</td>
          <td>HP</td>
          <td>DR</td>
        </thead>
        { table() }
      </table>
      <Dropdown items={items} dictionary={dictionary} update={bumpVersion} />
    </div>
  );
}

interface Boss {
  icon: string;
  name: string;
  abbreviated?: string;

  fullHP?: number;
  dr: number;

  selected?: boolean;
}

interface DamageProps {
  items: string[];
  dictionary: { [key: string]: Boss };
}

export default function Index() {
  const tabs = {
    "Normal": <IconList title="Weekly Bosses" items={BOSSES_ORDER} dictionary={BOSSES()} />,
    "Mesos": <IconListCounter items={MESOS_ORDER} dictionary={BOSSES()} />,
    "Damage": <Damage items={BOSSES_ORDER} dictionary={BOSSES()} />,
  };

  return (
    <div>
      {/* TODO: For all titles and subtitles, center them on page? */}
      <h1>Bosses</h1>
      <TabRow tabs={tabs} />
    </div>
  )
}
