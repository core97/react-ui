import { BarChart } from "./BarChart";
import { ChartProps, ChartVariant } from "./Chart.types";

export const Chart = (props: ChartProps) => {
  if (props.variant === ChartVariant.bar) {
    return <BarChart {...props} />;
  }

  return null;
};
