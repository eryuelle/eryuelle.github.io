import styles from "./gear-table.module.css";

interface Icon {
  icons: string[];
  desc: string;
}

interface IconListProps {
  icons: Icon[];
}

export default function GearTable({ icons }: IconListProps) {
  const showIcons = (icons: string[]) => {
    return icons.map((icon) => {
      return (
        <div className="icon-cage-30 icon-border">
          <img
            className="icon"
            src={icon}
          />
        </div>
      );
    });
  }

  const iter = () => {
    return icons.map((icon) => {
      return (
        <tr>
          <td><div className="flex gap-4">
            { showIcons(icon.icons) }
          </div></td>
          <td>{icon.desc}</td>
        </tr>
      );
    });
  };

  return (
    <table id={styles.table}>
      { iter() }
    </table>
  );
};
