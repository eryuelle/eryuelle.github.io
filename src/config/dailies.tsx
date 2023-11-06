interface Daily {
  name: string;
  icon: string;
  exp?: number;
  flavor?: string;
}

let DAILIES_DATA: { [key: string]: Daily } = {
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

export const DAILIES = () => {
  for (const [k, v] of Object.entries(DAILIES_DATA)) {
    if (v.exp !== undefined) {
      DAILIES_DATA[k].flavor = `${v.exp.toLocaleString("en-US")} EXP`;
    }
  }
  return DAILIES_DATA;
}

export const DAILIES_ORDER = [
  "Vanishing Journey",
  "Chu Chu Island",
  "Lachelein",
  "Arcana",
  "Morass",
  "Esfera",
];
