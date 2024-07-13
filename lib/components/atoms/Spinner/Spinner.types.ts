import { ColorName } from "../../../types/colors.types";

export interface SpinnerProps {
  color?: ColorName;
  customSize?: string;
  size?: "xs" | "s" | "m" | "l" | "xl" | "2xl";
}
