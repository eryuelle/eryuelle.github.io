// AR = Arcane River

interface ARWeekly {
  name: string;
  icon: string;
  level: number;
  flavor?: string;
}

let AR_WEEKLIES_DATA: { [key: string]: ARWeekly } = {
  "Vanishing Journey": {
    name: "Erda Spectrum",
    icon: "/icons/symbols/vanishing_journey.png",
    level: 200,
  },
  "Chu Chu Island": {
    name: "Hungry Muto",
    icon: "/icons/symbols/chu_chu_island.png",
    level: 210,
  },
  "Lachelein": {
    name: "Midnight Chaser",
    icon: "/icons/symbols/lachelein.png",
    level: 220,
  },
  "Arcana": {
    name: "Spirit Savior",
    icon: "/icons/symbols/arcana.png",
    level: 225,
  },
  "Morass": {
    name: "Ranheim Defense",
    icon: "/icons/symbols/morass.png",
    level: 230,
  },
  "Esfera": {
    name: "Protect Esfera",
    icon: "/icons/symbols/esfera.png",
    level: 235,
  },
};

export const AR_WEEKLIES = () => {
  for (const [k, v] of Object.entries(AR_WEEKLIES_DATA)) {
      AR_WEEKLIES_DATA[k].flavor = `Level ${v.level}+`;
  }
  return AR_WEEKLIES_DATA;
}

export const AR_WEEKLIES_ORDER = [
  "Vanishing Journey",
  "Chu Chu Island",
  "Lachelein",
  "Arcana",
  "Morass",
  "Esfera",
];

// B = Bosses

interface BWeekly {
  name: string;
  icon: string;
  flavor: string;
}

// TODO: There's a lot of weekly bosses...
let B_WEEKLIES_DATA: { [key: string]: BWeekly } = {
  "WIP": {
    name: "Work in Progress...",
    icon: "/icons/bosses/black_mage.png",
    flavor: "Not sure what to put here",
  },
};

export const B_WEEKLIES = () => {
  return B_WEEKLIES_DATA;
}

export const B_WEEKLIES_ORDER = [
  "WIP",
];

// T = Tasks

interface TWeekly {
  name: string;
  icon: string;
  exp?: string;
  mesos?: string;
  flavor?: string;
}

let T_WEEKLIES_DATA: { [key: string]: TWeekly } = {
  "Scrapyard": {
    name: "Scrapyard",
    icon: "/icons/tasks/diffusion_line_energy_core_grade_a.png",
    flavor: "[Absolab Coins] Lotus",
  },
  "Dark World Tree": {
    name: "Dark World Tree",
    icon: "/icons/tasks/faint_stigma_spirit_stone.png",
    flavor: "[Absolab Coins] Damien",
  },
};

export const T_WEEKLIES = () => {
  return T_WEEKLIES_DATA;
}

export const T_WEEKLIES_ORDER = [
  "Scrapyard",
  "Dark World Tree",
];
