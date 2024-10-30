import { Locale } from "date-fns";
import { CalendarProps } from "../../../atoms/Calendar";

export interface DatePickerValueProps {
  mode: NonNullable<CalendarProps["mode"]>;
  locale?: Pick<Locale, "options" | "localize" | "formatLong">;
  selected?: string[];
}
