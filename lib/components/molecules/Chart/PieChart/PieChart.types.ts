export type PieChartDataItem = {
  name: string;
  value: number;
};

export enum PieChartType {
  doughnut = "doughnut",
  pie = "pie",
}

export interface PieChartProps {
  data: PieChartDataItem[];
  legendIsVisible?: boolean;
  labelIsVisible?: boolean;
  type?: keyof typeof PieChartType;
}
