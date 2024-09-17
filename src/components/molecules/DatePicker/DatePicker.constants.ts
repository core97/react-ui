import { NonNullable } from "../../../types/utils.types";
import { DatePickerProps } from "./DatePicker.types";

export const ICON_SIZE: Record<NonNullable<DatePickerProps["size"]>, number> = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
};
