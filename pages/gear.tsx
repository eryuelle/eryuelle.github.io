import { GEAR_LIST } from '../src/config/gear';

interface Icon {
  icons: string[];
  desc: string;
}

interface IconListProps {
  icons: Icon[];
}

function GearList({ icons }: IconListProps) {
  const iter = () => {
    return icons.map((icon) => {
      return (
        <li>
          <div className="gear-list-item">
            <img
              className="maple-icon-small"
              src={icon.icons[0]}
            />
            <div>{icon.desc}</div>
          </div>
        </li>
      );
    });
  };

  return (
    <ul>
      { iter() }
    </ul>
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
