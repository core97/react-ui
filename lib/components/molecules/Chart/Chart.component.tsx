import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";
import { ChartProps, ChartVariant } from "./Chart.types";

export const Chart = (props: ChartProps) => {
  if (props.variant === ChartVariant.bar) {
    return <BarChart {...props} />;
  }

  if (props.variant === ChartVariant.pie) {
    return <PieChart {...props} />;
  }

  return null;
};
