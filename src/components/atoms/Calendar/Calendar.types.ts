import { type DayPickerProps } from "react-day-picker";

export type CalendarProps = DayPickerProps & {
  size?: "xs" | "s" | "m" | "l" | "xl";
};
