export type DonutChartDataItem = {
  name: string;
  value: number;
};

export interface DonutChartProps {
  data: DonutChartDataItem[];
  legendIsVisible?: boolean;
  totalIsVisible?: boolean;
}
