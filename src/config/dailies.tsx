// AR = Arcane River

interface ARDaily {
  name: string;
  icon: string;
  exp: number;
  flavor?: string;
}

let AR_DAILIES_DATA: { [key: string]: ARDaily } = {
  "Vanishing Journey": {
    name: "Vanishing Journey",
    icon: "/icons/symbols/vanishing_journey.png",
    exp: 563_178_660,
  },
  "Chu Chu Island": {
    name: "Chu Chu Island",
    icon: "/icons/symbols/chu_chu_island.png",
    exp: 1_647_429_420,
  },
  "Lachelein": {
    name: "Lachelein",
    icon: "/icons/symbols/lachelein.png",
    exp: 2_453_152_500,
  },
  "Arcana": {
    name: "Arcana",
    icon: "/icons/symbols/arcana.png",
    exp: 2_542_452_030,
  },
  "Morass": {
    name: "Morass",
    icon: "/icons/symbols/morass.png",
    exp: 3_383_281_665,
  },
  "Esfera": {
    name: "Esfera",
    icon: "/icons/symbols/esfera.png",
    exp: 3_485_264_580,
  },
};

export const AR_DAILIES = () => {
  for (const [k, v] of Object.entries(AR_DAILIES_DATA)) {
    if (v.exp !== undefined) {
      AR_DAILIES_DATA[k].flavor = `${v.exp.toLocaleString("en-US")} EXP`;
    }
  }
  return AR_DAILIES_DATA;
}

export const AR_DAILIES_ORDER = [
  "Vanishing Journey",
  "Chu Chu Island",
  "Lachelein",
  "Arcana",
  "Morass",
  "Esfera",
];

// B = Bosses

interface BDaily {
  name: string;
  icon: string;
  flavor: string;
}

// TODO: Just Arkarium and Gollux? Ninja Castle?
let B_DAILIES_DATA: { [key: string]: BDaily } = {
  "Ursus": {
    name: "Ursus",
    icon: "/icons/tasks/ursus.png",
    flavor: "[Placeholder] We need money.",
  },
};

export const B_DAILIES = () => {
  return B_DAILIES_DATA;
}

export const B_DAILIES_ORDER = [
  "Ursus",
];

// T = Tasks

interface TDaily {
  name: string;
  icon: string;
  exp?: string;
  mesos?: string;
  flavor?: string;
}

// TODO: Add Maple Tour
let T_DAILIES_DATA: { [key: string]: TDaily } = {
  "Monster Park": {
    name: "Monster Park",
    icon: "/icons/tasks/monster_park.png",
    exp: "???",
  },
  "Ursus": {
    name: "Ursus",
    icon: "/icons/tasks/ursus.png",
    mesos: "90,000,000+",
  },
};

export const T_DAILIES = () => {
  for (const [k, v] of Object.entries(T_DAILIES_DATA)) {
    // Don't perform translation, it's cursed...
    if (v.exp !== undefined) {
      T_DAILIES_DATA[k].flavor = `${v.exp} EXP`;
    } else if (v.mesos !== undefined) {
      T_DAILIES_DATA[k].flavor = `${v.mesos} Mesos`;
    }
  }
  return T_DAILIES_DATA;
}

export const T_DAILIES_ORDER = [
  "Monster Park",
  "Ursus",
];
