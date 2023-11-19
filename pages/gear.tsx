import { GEAR_LIST } from '../src/config/gear';

interface Icon {
  icons: string[];
  desc: string;
}

interface IconListProps {
  icons: Icon[];
}

function GearList({ icons }: IconListProps) {
  const showIcons = (icons: string[]) => {
    return icons.map((icon) => {
      return (
        <img
          className="maple-icon-small"
          src={icon}
        />
      );
    });
  }

  const iter = () => {
    return icons.map((icon) => {
      return (
        <tr>
          <td><div className="image-cage">
            { showIcons(icon.icons) }
          </div></td>
          <td>{icon.desc}</td>
        </tr>
      );
    });
  };

  return (
    <table id="gear-table">
      { iter() }
    </table>
  );
};

export default function Index() {
  return (
    <>
      <h1>Gear Guide</h1>
      <GearList icons={GEAR_LIST} />
    </>
  )
}
