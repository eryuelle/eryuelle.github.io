import { ReactNode } from "react";

import styles from './icon-list.module.css';

interface Icon {
  icon: string;
  name: string;

  forcePadding?: boolean;
  flavor?: ReactNode;
  cornerFlavor?: string;
  lastFlavor?: string;
}

interface IconListProps {
  compact?: boolean;
  bordered?: boolean;

  title: string;
  items: string[];
  dictionary: { [key: string]: Icon };
}

export default function IconList({ bordered = false, compact, title, items, dictionary }: IconListProps) {
  const borderClass = () => {
    return bordered ? "icon-border" : "";
  }

  const paddedClass = (icon: Icon) => {
    return icon.forcePadding? "icon-padded" : "icon";
  }

  const compactIter = () => {
    return items.map((item) => {
      const i = dictionary[item];

      return (
        <div className={styles.iconitem}>
          <div className={`icon-cage-30 ${borderClass()}`}>
            <img
              className="icon"
              src={i.icon}
            />
          </div>
          <div className={`${styles.iconhalf}`}>
            {i.name}
          </div>
        </div>
      );
    });
  };

  const iter = () => {
    return items.map((item) => {
      const i = dictionary[item];

      return (
        <div className={styles.iconitem}>
          <div className={`icon-cage-40 ${borderClass()}`}>
            <img
              className={paddedClass(i)}
              src={i.icon}
            />
          </div>
          
          <div className={styles.icondesc}>
            <div className={styles.iconhalf}>
              <div>{i.name}</div>
              <div className="flavortext">{i.flavor}</div>
            </div>
            {/* Make this one optional? */}
            <div className={styles.iconhalfright}>
              <div className="bigflavortext">{i.cornerFlavor}</div>
              <div className="flavortext">{i.lastFlavor}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      { compact ? compactIter() : iter() }
    </div>
  );
};
