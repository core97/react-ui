import { BarChartProps } from "./BarChart";
import { PieChartProps } from "./PieChart";

export enum ChartVariant {
  bar = "bar",
  pie = "pie",
}

export type ChartProps =
  | ({ variant: `${ChartVariant.bar}` } & BarChartProps)
  | ({ variant: `${ChartVariant.pie}` } & PieChartProps);
