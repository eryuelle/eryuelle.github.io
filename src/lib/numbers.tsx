export const abbreviateNumber = (number: number): string => {
  const abbreviations = ['', 'K', 'M', 'B', 'T', 'Q'];

  let index = 0;
  while (number >= 1000 && index < abbreviations.length - 1) {
    number /= 1000;
    index++;
  }

  return number.toFixed(1) + abbreviations[index];
}

export const commaNumber = (number: number): string => {
  return number.toLocaleString("en-US");
}

export const sum = (numbers: number[]): number => {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}
