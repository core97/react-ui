import { NonNullable } from "../../../types/utils.types";
import { CalendarProps } from "./Calendar.types";

export const ICON_SIZE: Record<NonNullable<CalendarProps["size"]>, number> = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
};
