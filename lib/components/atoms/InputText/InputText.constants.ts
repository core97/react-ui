import { NonNullable } from "../../../types/utils.types";
import { InputTextProps } from "./InputText.types";

export const ICON_SIZE: Record<NonNullable<InputTextProps["size"]>, number> = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
};
