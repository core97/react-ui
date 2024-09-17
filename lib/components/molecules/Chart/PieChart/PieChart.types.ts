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
  quantityLabelIsVisible?: boolean;
  quantityLabel?: string;
  type?: keyof typeof PieChartType;
}
