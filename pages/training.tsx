import TabRow from "../src/components/tab-row/tab-row";

interface Map {
  name: string;
  level: number;
  force?: number;
}

interface TrainingTableProps {
  maps: Map[];
}

const MAPLE_WORLD = [
  {
    name: "Character Quest",
    level: 1,
  },
  {
    name: "Savage Terminal Maps",
    level: 10,
  },
  {
    name: "Theme Dungeons",
    level: 30,
  },
  {
    name: "Silent Swamp",
    level: 66,
  },
  {
    name: "Cave Cliff",
    level: 68,
  },
  {
    name: "Stairway to the Sky I",
    level: 71,
  },
  {
    name: "Ice Valley II",
    level: 81,
  },
  {
    name: "Tent of the Entertainers",
    level: 86,
  },
  {
    name: "Sahel 2",
    level: 90,
  },
  {
    name: "Lab - Area C-2: Authorized Personnel Only",
    level: 95,
  },
  {
    name: "Minar Forest: West Border",
    level: 104,
  },
  {
    name: "Toy Factory <Process 1> Zone 5",
    level: 113,
  },
  {
    name: " Fantasy Theme World: Extreme Station <3>",
    level: 123,
  },
  {
    name: "Korean Folk Town: Moonlight Ridge",
    level: 137,
  },
  {
    name: "Partem: Keeper's Path 4 (req. lv 135)",
    level: 142,
  },
  {
    name: "Kerning Tower: 2F Cafe <2, 3> (has SF)",
    level: 149,
  },
  {
    name: "Kerning Tower: 5F Cosmetic Shops <3> (has SF)",
    level: 155,
  },
  {
    name: "Showa Street 2",
    level: 164,
  },
  {
    name: "Boswell Field IV",
    level: 167,
  },
  {
    name: "Kritias: Forest of Pain 2",
    level: 171,
  },
  {
    name: "Corridor 203 (has SF)",
    level: 175,
  },
  {
    name: "Kritias: Forest of Scorching 2",
    level: 180,
  },
  {
    name: "Dingy Brawl 'n' Bash Club 3 (req. level 175)",
    level: 182,
  },
  {
    name: "Kritias: Forest of Sorrow 4",
    level: 185,
  },
  {
    name: "Twilight Perion: Deserted Southern Ridge (has SF)",
    level: 190,
  },
  {
    name: "Fox Tree Top Path (req. lv 180 + quests)",
    level: 191,
  },
  {
    name: "Fox Tree Lower Path (req. lv 180 + quests)",
    level: 194,
  },
  {
    name: "Twilight Perion: Forsaken Excavation Site 2",
    level: 195,
  },
  {
    name: "[Haven] Scrapyard Quests",
    level: 199,
  },
];

const ARCANE_RIVER = [
  {
    name: "Weathered Land of Rage",
    level: 201,
    force: 30,
  },
  {
    name: "Fire Zone",
    level: 205,
    force: 40,
  },
  {
    name: "T-Boy's Research Train 1",
    level: 206,
    force: 40,
  },
  {
    name: "Hidden Research Train",
    level: 210,
    force: 100,
  },
  {
    name: "Slurpy Forest: Slurpy Forest Depths",
    level: 213,
    force: 100,
  },
  {
    name: "Revelation Place 3",
    level: 224,
    force: 210,
  },
  {
    name: "Occupied Dance Floor 2",
    level: 224,
    force: 210,
  },
  {
    name: "The Forest of Earth",
    level: 232,
    force: 280,
  },
  {
    name: "Between Frost and Thunder 2",
    level: 234,
    force: 320,
  },
  {
    name: "Cavern Lower Path",
    level: 237,
    force: 360,
  },
  {
    name: "Labyrinthine Cavern - Upper Path",
    level: 240,
    force: 360,
  },
  {
    name: "Labyrinthine Cavern - Upper Path",
    level: 240,
    force: 360,
  },
  {
    name: "Shadowdance Hall 4",
    level: 240,
    force: 480,
  },
  {
    name: "Mirror-touched Sea 2, 4",
    level: 245,
    force: 600,
  },
  {
    name: "Mirror-touched Sea 7",
    level: 247,
    force: 600,
  },
  {
    name: "Star-Swallowing Sea 1, 4",
    level: 247,
    force: 670,
  },
  {
    name: "Last Horizon 2",
    level: 251,
    force: 670,
  },
  {
    name: "Void Current 3",
    level: 254,
    force: 730,
  },
  {
    name: "Labyrinth of Suffering Deep Core 1",
    level: 259,
    force: 820,
  },
  {
    name: "End of the World 1-4, 1-5, 1-7",
    level: 263,
    force: 880,
  },
];

function TrainingTable({ maps }: TrainingTableProps) {
  const iter = () => {
    return maps.map((map) => {
      return (
        <tr>
          <td className="padding-2 text-center">{map.level}</td>
          { map.force !== undefined ? <td className="padding-2 text-center">{map.force}</td> : <></> }
          <td className="padding-2">{map.name}</td>
        </tr>
      );
    });
  };

  return (
    <table className="tmargin-8">
      <thead className="bordered-bottom bold">
        { maps[0].force !== undefined ?
          <td className="w-60 padding-2 text-center">Level</td> :
          <td className="w-100 padding-2 text-center">Level</td>
        }
        { maps[0].force !== undefined ? <td className="w-100 padding-2 text-center">Force</td> : <></> }
        <td className="padding-2">Location</td>
      </thead>
      { iter() }
    </table>
  );
};

export default function Index() {
  const tabs = {
    "Maple World": <TrainingTable maps={MAPLE_WORLD} />,
    "Arcane River": <TrainingTable maps={ARCANE_RIVER} />,
  };

  return (
    <div>
      <h1>Training Guide</h1>
      <div className="flavortext">Below are the levels of the monsters, not when you should go</div>
      <TabRow tabs={tabs} />
    </div>
  )
}
