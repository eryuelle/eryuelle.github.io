import { abbreviateNumber, sum } from "../lib/numbers";

interface Boss {
  name: string;
  icon: string;
  hp: number[];
  dr: number;
  mesos: number;
  kills?: number;

  // For icon-list-counter
  numVal?: number;
  defaultVal?: number;

  // Computed flavor texts
  flavor?: string;
  cornerFlavor?: string;
  lastFlavor?: string;
}

let BOSSES_DATA: { [key: string]: Boss } = {
  "Easy Will": {
    name: "Easy Will",
    icon: "/icons/bosses/will.png",
    hp: [5_600_000_000_000, 4_200_000_000_000, 7_000_000_000_000],
    dr: 300,
    mesos: 191_275_000,
  },
  "Easy Lucid": {
    name: "Easy Lucid",
    icon: "/icons/bosses/lucid.png",
    hp: [6_000_000_000_000, 6_000_000_000_000],
    dr: 300,
    mesos: 175_562_500,
    kills: 0.5,
  },
  "Normal Guardian Angel Slime": {
    name: "Normal Guardian Angel Slime",
    icon: "/icons/bosses/guardian_angel_slime.png",
    hp: [5_000_000_000_000],
    dr: 300,
    mesos: 171_610_000,
    kills: 0.5,
  },
  "Normal Damien": {
    name: "Normal Damien",
    icon: "/icons/bosses/damien.png",
    hp: [840_000_000_000, 360_000_000_000],
    dr: 300,
    mesos: 169_000_000,
    kills: 1,
  },
  "Normal Lotus": {
    name: "Normal Lotus",
    icon: "/icons/bosses/lotus.png",
    hp: [400_000_000_000, 400_000_000_000, 710_000_000_000],
    dr: 300,
    mesos: 162_562_500,
    kills: 1,
  },
  "Akechi Mitsuhide": {
    name: "Akechi Mitsuhide",
    icon: "/icons/bosses/akechi_mitsuhide.png",
    hp: [152_000_000_000, 152_000_000_000],
    dr: 300,
    mesos: 144_000_000,
    kills: 1,
  },
  "Chaos Papulatus": {
    name: "Chaos Papulatus",
    icon: "/icons/bosses/papulatus.png",
    hp: [378_000_000_000, 126_000_000_000],
    dr: 250,
    mesos: 132_250_000,
    kills: 1,
  },
  "Chaos Vellum": {
    name: "Chaos Vellum",
    icon: "/icons/bosses/vellum.png",
    hp: [200_000_000_000],
    dr: 200,
    mesos: 105_062_500,
    kills: 2,
  },
  "Hard Magnus": {
    name: "Hard Magnus",
    icon: "/icons/bosses/magnus.png",
    hp: [120_000_000_000],
    dr: 120,
    mesos: 95_062_500,
    kills: 2,
  },
  "Normal Princess No": {
    name: "Normal Princess No",
    icon: "/icons/bosses/princess_no.png",
    hp: [200_000_000_000],
    dr: 100,
    mesos: 81_000_000,
    kills: 2,
  },
  "Chaos Zakum": {
    name: "Chaos Zakum",
    icon: "/icons/bosses/zakum.png",
    hp: [84_000_000_000, 84_000_000_000],
    dr: 100,
    mesos: 81_000_000,
    kills: 2,
  },
  "Chaos Crimson Queen": {
    name: "Chaos Crimson Queen",
    icon: "/icons/bosses/crimson_queen.png",
    hp: [140_000_000_000],
    dr: 120,
    mesos: 81_000_000,
    kills: 2,
  },
  "Chaos Von Bon": {
    name: "Chaos Von Bon",
    icon: "/icons/bosses/von_bon.png",
    hp: [100_000_000_000],
    dr: 100,
    mesos: 81_000_000,
    kills: 2,
  },
  "Chaos Pierre": {
    name: "Chaos Pierre",
    icon: "/icons/bosses/pierre.png",
    hp: [80_000_000_000],
    dr: 80,
    mesos: 81_000_000,
    kills: 2,
  },
  "Normal Cygnus": {
    name: "Normal Cygnus",
    icon: "/icons/bosses/cygnus.png",
    hp: [63_000_000_000],
    dr: 100,
    mesos: 72_250_000,
    kills: 2,
  },
  /* TODO: Fix Chaos Pink Bean HP to include statues */
  "Chaos Pink Bean": {
    name: "Chaos Pink Bean",
    icon: "/icons/bosses/pink_bean.png",
    hp: [69_300_000_000],
    dr: 100,
    mesos: 64_000_000,
    kills: 2,
  },
  "Hard Hilla": {
    name: "Hard Hilla",
    icon: "/icons/bosses/hilla.png",
    hp: [16_800_000_000],
    dr: 100,
    mesos: 56_250_000,
    kills: 2,
  },
  "Hard Von Leon": {
    name: "Hard Von Leon",
    icon: "/icons/bosses/von_leon.png",
    hp: [10_500_000_000],
    dr: 90,
    mesos: 12_250_000,
  },
};

export const BOSSES = () => {
  for (const [k, v] of Object.entries(BOSSES_DATA)) {
    BOSSES_DATA[k].numVal = v.mesos;
    BOSSES_DATA[k].defaultVal = v.kills;
    BOSSES_DATA[k].flavor = `${abbreviateNumber(v.mesos)} Mesos`;
    BOSSES_DATA[k].cornerFlavor = `${abbreviateNumber(sum(v.hp))} HP`;
    BOSSES_DATA[k].lastFlavor = `${v.dr}% DR`;
  }
  return BOSSES_DATA;
}

export const MESOS_ORDER = [
  "Easy Will",
  "Easy Lucid",
  "Normal Guardian Angel Slime",
  "Normal Damien",
  "Normal Lotus",
  "Akechi Mitsuhide",
  "Chaos Papulatus",
  "Chaos Vellum",
  "Hard Magnus",
  "Normal Princess No",
  "Chaos Zakum",
  "Chaos Crimson Queen",
  "Chaos Von Bon",
  "Chaos Pierre",
  "Normal Cygnus",
  "Chaos Pink Bean",
  "Hard Hilla",
];

export const BOSSES_ORDER = [
  "Easy Will",
  "Easy Lucid",
  "Normal Guardian Angel Slime",
  "Normal Damien",
  "Normal Lotus",
  "Akechi Mitsuhide",
  "Chaos Papulatus",
  "Chaos Vellum",
  "Hard Magnus",
  "Normal Princess No",
  "Chaos Zakum",
  "Chaos Crimson Queen",
  "Chaos Von Bon",
  "Chaos Pierre",
  "Normal Cygnus",
  "Chaos Pink Bean",
  "Hard Hilla",
  "Hard Von Leon",
];
