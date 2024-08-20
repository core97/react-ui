import { PieProps } from "recharts";

export type DonutChartDataItem = {
  name: string;
  value: number;
};

export interface DonutChartProps extends Pick<PieProps, "height"> {
  data: DonutChartDataItem[];
  legendIsVisible?: boolean;
  totalIsVisible?: boolean;
}
