import { CalendarProps } from "../../../atoms/Calendar";

export interface DatePickerValueProps {
  mode: NonNullable<CalendarProps["mode"]>;
  locale?: CalendarProps["locale"];
  selected?: string[];
}
