export const calcPercentage = (value?: number, total?: number): string => {
  if (typeof total === "number" && typeof value === "number") {
    let percentage = (value / total) * 100;

    if (percentage % 1 !== 0) {
      percentage = parseFloat(percentage.toFixed(2));
    }

    return ` (${percentage}%)`;
  } else {
    return "";
  }
};
