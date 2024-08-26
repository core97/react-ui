import { IconProps } from "../Icon";
import { InputSizeMeasure } from "../../../types/input-size.types";

export enum InputRadioCardDirection {
  horizontal = "horizontal",
  vertical = "vertical",
}

export interface InputRadioCardProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type" | "size"
  > {
  icon?: IconProps["name"];
  label?: string;
  isInvalid?: boolean;
  direction?: keyof typeof InputRadioCardDirection;
  size?: keyof typeof InputSizeMeasure;
}
