export const calcFontSizeLabel = (total: number): number => {
  let fontSize = 0;

  if (total < 100) {
    fontSize = 6;
  } else if (total < 1000) {
    fontSize = 7;
  } else if (total < 10000) {
    fontSize = 8;
  } else if (total < 100000) {
    fontSize = 8;
  } else if (total < 1000000) {
    fontSize = 12;
  } else if (total < 10000000) {
    fontSize = 14;
  }

  return fontSize;
};
