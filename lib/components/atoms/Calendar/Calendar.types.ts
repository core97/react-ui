import { Locale, type DayPickerProps } from "react-day-picker";

export type CalendarProps = DayPickerProps & {
  locale?: Pick<Locale, "options" | "localize" | "formatLong">;
};
