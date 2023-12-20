/* A fork off of the icon-list component */

import React, { ReactNode, useEffect, useState } from "react";

import styles from './icon-list-counter.module.css';
import Counter from "./counter";
import { abbreviateNumber } from "../../lib/numbers";

interface Icon {
  icon: string;
  name: string;

  numVal?: number;
  defaultVal?: number;

  forcePadding?: boolean;
  flavor?: ReactNode;
}

interface IconListProps {
  bordered?: boolean;

  title?: string;
  items: string[];
  dictionary: { [key: string]: Icon };
}

export default function IconListCounter({ bordered = false, title = "", items, dictionary }: IconListProps) {
  const [started, setStarted] = useState<boolean>(false);
  const [sum, setSum] = useState<number>(NaN);
  const [counts, setCounts] = useState<number[]>([]);

  const borderClass = () => { return bordered ? "icon-border" : "" }
  const paddedClass = (icon: Icon) => { return icon.forcePadding? "icon-padded" : "icon" }

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    console.log(newValue);
    setCounts(counts.map((c, i) => i === index ? newValue : c));
  };

  const iter = () => {
    return items.map((item, idx) => {
      const i = dictionary[item];

      return (
        <div className={styles.iconitem}>
          <Counter value={counts[idx]} onChange={(event) => handleChange(idx, event)} />

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
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    let arr: number[] = [];
    for (const item of items) {
      let toPush = dictionary[item].defaultVal;
      if (toPush === undefined) {
        toPush = 0;
      }
      arr.push(toPush);
    }

    setCounts(arr);
    setStarted(true);
  }, []);

  useEffect(() => {
    const s = counts.reduce((accumulator, curr, idx) => {
      let boss = dictionary[items[idx]];
      let total = 0;
      if (boss.numVal !== undefined) {
        total = curr * boss.numVal;
      }
      return accumulator + total;
    }, 0);
    setSum(s);
  }, [started, counts]);

  return (
    <div className={styles.container}>
      { title !== "" ? <h2>{title}</h2> : <></> }
      <div>Total: {abbreviateNumber(sum)} Mesos/week</div>
      { iter() }
    </div>
  );
};
