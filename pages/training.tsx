import TabRow from "../src/components/tab-row/tab-row";

interface Map {
  name: string;
  range: string;
  force?: string;
}

interface TrainingTableProps {
  maps: Map[];
}

const maps = [
  {
    name: "Character Quest",
    range: "1~30",
  },
  {
    name: "Savage Terminal Maps",
    range: "1~30",
  },
  {
    name: "Theme Dungeons",
    range: "30~60",
  },
  {
    name: "Silent Swamp",
    range: "66",
  },
  {
    name: "Cave Cliff",
    range: "68",
  },
  {
    name: "Stairway to the Sky I",
    range: "71",
  },
  {
    name: "Ice Valley II",
    range: "81",
  },
  {
    name: "Tent of the Entertainers",
    range: "86",
  },
  {
    name: "Sahel 2",
    range: "90",
  },
  {
    name: "Lab - Area C-2: Authorized Personnel Only",
    range: "95",
  },
  {
    name: "Minar Forest: West Border",
    range: "104",
  },
  {
    name: "Toy Factory <Process 1> Zone 5",
    range: "113",
  },
  {
    name: " Fantasy Theme World: Extreme Station <3>",
    range: "123",
  },
  {
    name: "Korean Folk Town",
    range: "130~140",
  },
  {
    name: "Partem: Keeper's Path 4 (req. lv 135)",
    range: "142",
  },
  {
    name: "Kerning Tower: 2F Cafe <2, 3> (has SF)",
    range: "149",
  },
  {
    name: "Kerning Tower: 5F Cosmetic Shops <3> (has SF)",
    range: "155",
  },
  {
    name: "Showa Street 2",
    range: "164",
  },
  {
    name: "Boswell Field IV",
    range: "167",
  },
  {
    name: "Kritias: Forest of [Pain 2, Scorching 2, Sorrow 4]",
    range: "170~186",
  },
  {
    name: "Corridor 203 (has SF)",
    range: "175",
  },
  {
    name: "Dingy Brawl 'n' Bash Club 3 (req. level 175)",
    range: "182",
  },
  {
    name: "Twilight Perion: Deserted Southern Ridge (has SF)",
    range: "190",
  },
  {
    name: " Fox Tree Top Path (req. lv 180 + quests)",
    range: "191",
  },
  {
    name: "Fox Tree Lower Path (req. lv 180 + quests)",
    range: "194",
  },
  {
    name: "Twilight Perion: Forsaken Excavation Site 2",
    range: "195",
  },
  {
    name: "[Haven] Scrapyard Quests",
    range: "199",
  },
];

function TrainingTable({ maps }: TrainingTableProps) {
  const iter = () => {
    return maps.map((map) => {
      return (
        <tr>
          <td className="padding-2 text-center">{map.range}</td>
          <td className="padding-2">{map.name}</td>
        </tr>
      );
    });
  };

  return (
    <table className="tmargin-8">
      <thead className="bordered-bottom bold">
        <td className="w-100 padding-2 text-center">Level</td>
        <td className="padding-2">Location</td>
      </thead>
      { iter() }
    </table>
  );
};

export default function Index() {
  const tabs = {
    "Maple World": <TrainingTable maps={maps} />,
    "Arcane River": (
      <ul>
        <li>[201 (30*)] Weathered Land of Rage</li>
        <li>[205 (40*)] Fire Zone</li>
        <li>[206 (40*)] T-Boy's Research Train 1</li>
        <li>[210 (100*)] Hidden Research Train</li>
        <li>[213 (100*)] Slurpy Forest: Slurpy Forest Depths</li>
        <li>[220 (190*)] Yum Yum Island Hidden Illiard Field</li>
        <li>[222 (210*)] Chicken Festival 2</li>
        <li>[224 (210*)] Revelation Place 3</li>
        <li>[225 (210*)] Occupied Dance Floor 2</li>
        <li>[234 (320*)] Between Frost and Thunder 2</li>
        <li>[237 (360*)] Cavern Lower Path</li>
        <li>[240 (360*)] Labyrinthine Cavern - Upper Path</li>
        <li>[245 (600*)] Mirror-touched Sea 2, 4</li>
        <li>[247 (600*)] Mirror-touched Sea 7</li>
        <li>[251 (670*)] Star-Swallowing Sea 1, 4</li>
        <li>[251 (670*)] Last Horizon 2</li>
        <li>[254 (730*)] Void Current 3</li>
        <li>[263 (880*)] End of the World 1-4, 1-5, 1-7</li>
      </ul>
    ),
  };

  return (
    <div>
      <h1>Training Guide</h1>
      <div className="flavortext">Below are the levels of the monsters, not when you should go</div>
      <TabRow tabs={tabs} />
    </div>
  )
}
