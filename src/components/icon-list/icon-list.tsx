import styles from './icon-list.module.css';

interface Icon {
  icon: string;
  name: string;
  flavor?: string;
  cornerFlavor?: string;
  lastFlavor?: string;
}

interface IconListProps {
  compact?: boolean;
  title: string;
  items: string[];
  dictionary: { [key: string]: Icon };
}

export default function IconList({ compact, title, items, dictionary }: IconListProps) {
  const compactIter = () => {
    return items.map((item) => {
      const i = dictionary[item];

      return (
        <div className={styles.iconitem}>
          <div className="icon-cage-30 icon-border">
            <img
              className="icon"
              src={i.icon}
            />
          </div>
          <div className={`${styles.iconhalf} lpadding-8`}>
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
          <img
            className="maple-icon"
            src={i.icon}
          />
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
