import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { ChartVariant } from "../Chart.types";

export type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
  variant: keyof typeof ChartVariant;
};
