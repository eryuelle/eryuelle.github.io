import { GEAR_LIST } from '../src/config/gear';

interface Icon {
  icons: string[];
  desc: string;
}

interface IconListProps {
  icons: Icon[];
}

function GearList({ icons }: IconListProps) {
  // const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
  //   console.log('Image loaded:', );
  // };

  const showIcons = (icons: string[]) => {
    return icons.map((icon) => {
      return (
        <div className="image-cage2">
          <img
            // onLoad={handleImageLoad}
            className="maple-icon-small"
            src={icon}
            // ref={imgRef}
          />
        </div>
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
