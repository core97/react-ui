import { InputSizeMeasure } from "../../../types/input-size.types";

export interface CheckboxProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type" | "size"
  > {
  isInvalid?: boolean;
  size?: keyof typeof InputSizeMeasure;
}
