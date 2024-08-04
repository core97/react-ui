import { InputSizeMeasure } from "../../../types/input-size.types";

export interface InputRadioCardProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type" | "size"
  > {
  children?: React.ReactNode;
  isInvalid?: boolean;
  size?: InputSizeMeasure;
}
