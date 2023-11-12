import { abbreviateNumber, sum } from "../lib/numbers";

interface Boss {
  name: string;
  icon: string;
  hp: number[];
  dr: number;
  mesos: number;

  // Computed flavor texts
  flavor?: string;
  cornerFlavor?: string;
  lastFlavor?: string;
}

let BOSSES_DATA: { [key: string]: Boss } = {
  "Easy Will": {
    name: "Easy Will",
    icon: "/icons/bosses/will.png",
    hp: [5,600_000_000_000, 4,200_000_000_000, 7_000_000_000_000],
    dr: 300,
    mesos: 191_275_000,
  },
  "Easy Lucid": {
    name: "Easy Lucid",
    icon: "/icons/bosses/lucid.png",
    hp: [6_000_000_000_000, 6_000_000_000_000],
    dr: 300,
    mesos: 175_562_500,
  },
  "Normal Guardian Angel Slime": {
    name: "Normal Guardian Angel Slime",
    icon: "/icons/bosses/guardian_angel_slime.png",
    hp: [5_000_000_000_000],
    dr: 300,
    mesos: 171_610_000,
  },
  "Normal Damien": {
    name: "Normal Damien",
    icon: "/icons/bosses/damien.png",
    hp: [840_000_000_000, 360_000_000_000],
    dr: 300,
    mesos: 169_000_000,
  },
  "Normal Lotus": {
    name: "Normal Lotus",
    icon: "/icons/bosses/lotus.png",
    hp: [400_000_000_000, 400_000_000_000, 710_000_000_000],
    dr: 300,
    mesos: 162_562_500,
  },
  "Akechi Mitsuhide": {
    name: "Akechi Mitsuhide",
    icon: "/icons/bosses/akechi_mitsuhide.png",
    hp: [152_000_000_000, 152_000_000_000],
    dr: 300,
    mesos: 144_000_000,
  },
  "Chaos Papulatus": {
    name: "Chaos Papulatus",
    icon: "/icons/bosses/papulatus.png",
    hp: [378_000_000_000, 126_000_000_000],
    dr: 250,
    mesos: 132_250_000,
  },
};

export const BOSSES = () => {
  for (const [k, v] of Object.entries(BOSSES_DATA)) {
    BOSSES_DATA[k].flavor = `${abbreviateNumber(v.mesos)} Mesos`;
    BOSSES_DATA[k].cornerFlavor = `${abbreviateNumber(sum(v.hp))} HP`;
    BOSSES_DATA[k].lastFlavor = `${v.dr}% DR`;
  }
  return BOSSES_DATA;
}

export const BOSSES_ORDER = [
  "Easy Will",
  "Easy Lucid",
  "Normal Guardian Angel Slime",
  "Normal Damien",
  "Normal Lotus",
  "Akechi Mitsuhide",
  "Chaos Papulatus",
];
