import { NonNullable } from "../../../types/utils.types";
import { ButtonProps } from "./Button.types";

export const ICON_SIZE: Record<NonNullable<ButtonProps["size"]>, number> = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
};
