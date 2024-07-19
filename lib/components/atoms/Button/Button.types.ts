import { ICON_BY_NAME } from "../Icon/Icon.contants";
import { ColorName } from "../../../types/colors.types";
import { InputSizeMeasure } from "../../../types/input-size.types";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: ColorName;
  iconLeft?: keyof typeof ICON_BY_NAME;
  iconRight?: keyof typeof ICON_BY_NAME;
  isLoading?: boolean;
  size?: InputSizeMeasure;
  variant?: "filled" | "outline" | "ghost" | "link";
}
