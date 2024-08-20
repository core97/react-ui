import { BarChart } from "./BarChart";
import { DonutChart } from "./DonutChart";
import { ChartProps, ChartVariant } from "./Chart.types";

/**
 * TODO:
 * - Crear el componente tooltip
 * - Crear el componente Legend
 */

export const Chart = (props: ChartProps) => {
  if (props.variant === ChartVariant.bar) {
    return <BarChart {...props} />;
  }

  if (props.variant === ChartVariant.donut) {
    return <DonutChart {...props} />;
  }

  return null;
};
