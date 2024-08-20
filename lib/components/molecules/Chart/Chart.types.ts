import { BarChartProps } from "./BarChart";
import { DonutChartProps } from "./DonutChart";

export enum ChartVariant {
  bar = "bar",
  donut = "donut",
}

export type ChartProps =
  | ({ variant: `${ChartVariant.bar}` } & BarChartProps)
  | ({ variant: `${ChartVariant.donut}` } & DonutChartProps);
