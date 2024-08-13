import { ICON_BY_NAME } from "../Icon/Icon.contants";
import { ColorName } from "../../../types/colors.types";
import { InputSizeMeasure } from "../../../types/input-size.types";

export enum ButtonVariants {
  filled = "filled",
  outline = "outline",
  ghost = "ghost",
  link = "link",
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: keyof typeof ColorName;
  iconLeft?: keyof typeof ICON_BY_NAME;
  iconRight?: keyof typeof ICON_BY_NAME;
  isFullWidth?: boolean;
  isLoading?: boolean;
  size?: keyof typeof InputSizeMeasure;
  variant?: keyof typeof ButtonVariants;
}
