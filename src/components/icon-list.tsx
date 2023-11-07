import styles from './icon-list.module.css';

interface IconListProps {
  title: string;
  items: string[];
  dictionary: { [key: string]: any };
}

export default function ListComponent({ title, items, dictionary }: IconListProps) {
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
            <div>{i.name}</div>
            <div className={styles.flavortext}>{i.flavor}</div>
          </div>
        </div>
      );
    });
  };

  // TODO: Support for sub-titles. Context: add info about Sunday / Wednesday reset
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      { iter() }
    </div>
  );
};
