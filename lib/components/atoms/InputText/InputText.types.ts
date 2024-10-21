import { ICON_BY_NAME } from "../Icon/Icon.contants";
import { InputSizeMeasure } from "../../../types/input-size.types";

export enum InputTextTypes {
  email = "email",
  number = "number",
  password = "password",
  search = "search",
  tel = "tel",
  text = "text",
  url = "url",
}

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
  type?: keyof typeof InputTextTypes;
}
