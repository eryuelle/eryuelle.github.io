import styles from './icon-list.module.css';

interface IconListProps {
  items: string[];
  dictionary: { [key: string]: any };
}

export default function ListComponent({ items, dictionary }: IconListProps) {
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
          </div>
        </div>
      );
    });
  };

  return (
    <>
     { iter() }
    </>
  );
};
