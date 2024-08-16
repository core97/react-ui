import { TextProps } from "../Text";

export enum FormHelperVariant {
  info = "info",
  error = "error",
}

export interface FormHelperProps extends TextProps {
  variant?: `${FormHelperVariant.info}` | `${FormHelperVariant.error}`;
}
