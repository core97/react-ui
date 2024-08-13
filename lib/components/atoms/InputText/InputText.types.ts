import { ICON_BY_NAME } from "../Icon/Icon.contants";
import { InputSizeMeasure } from "../../../types/input-size.types";

export interface InputTextProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type" | "size"
  > {
  iconLeft?: keyof typeof ICON_BY_NAME;
  iconRight?: keyof typeof ICON_BY_NAME;
  isInvalid?: boolean;
  size?: keyof typeof InputSizeMeasure;
  type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
}
