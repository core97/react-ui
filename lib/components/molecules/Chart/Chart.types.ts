import { BarChartProps } from "./BarChart";

export enum ChartVariant {
  bar = "bar",
}

export type ChartProps = { variant: `${ChartVariant.bar}` } & BarChartProps;
