import { IconProps } from "../Icon";
import { InputSizeMeasure } from "../../../types/input-size.types";

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
  direction?: "horizontal" | "vertical";
  size?: keyof typeof InputSizeMeasure;
}
