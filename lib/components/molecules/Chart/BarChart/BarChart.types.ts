import { BarProps } from "recharts";

export type BarChartDataItem = {
  name: string;
} & {
  [key: string]: number | string;
};

export interface BarChartProps extends Pick<BarProps, "layout"> {
  data: BarChartDataItem[];
  legendIsVisible?: boolean;
}
