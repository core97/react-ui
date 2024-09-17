import { ColorName } from "../../../types/colors.types";

export enum SpinnerSize {
  xs = "xs",
  s = "s",
  m = "m",
  l = "l",
  xl = "xl",
  "2xl" = "2xl",
}

export interface SpinnerProps {
  color?: keyof typeof ColorName;
  customSize?: string;
  size?: keyof typeof SpinnerSize;
}
