export const commaNumber = (number: number) => {
  return number.toLocaleString("en-US");
}

export const abbreviateNumber = (number: number) => {
  const abbreviations = ['', 'K', 'M', 'B', 'T', 'Q'];

  let index = 0;
  while (number >= 1000 && index < abbreviations.length - 1) {
    number /= 1000;
    index++;
  }

  return number.toFixed(1) + abbreviations[index];
}
