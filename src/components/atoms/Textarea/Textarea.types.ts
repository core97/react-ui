import { InputSizeMeasure } from "../../../types/input-size.types";

export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  isInvalid?: boolean;
  size?: keyof typeof InputSizeMeasure;
}
