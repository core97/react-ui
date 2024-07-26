import { NonNullable } from "../../../types/utils.types";
import { SelectProps } from "./Select.types";

export const OPTION_LIST_HEIGHT = 180;

export const ICON_SIZE: Record<NonNullable<SelectProps["size"]>, number> = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
};