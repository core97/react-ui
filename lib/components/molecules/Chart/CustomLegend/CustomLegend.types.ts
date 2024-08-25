import { Props as LegendProps } from "recharts/types/component/DefaultLegendContent";
import { ChartVariant } from "../Chart.types";

export type CustomLegendProps = LegendProps & {
  variant: keyof typeof ChartVariant;
};
