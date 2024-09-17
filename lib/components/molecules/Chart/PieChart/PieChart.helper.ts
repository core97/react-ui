export const calcFontSizeLabel = (total: number): number => {
  let fontSize = 0;

  if (total < 100000) {
    fontSize = 11;
  } else if (total < 1000000) {
    fontSize = 13;
  } else if (total < 10000000) {
    fontSize = 15;
  }

  return fontSize;
};
