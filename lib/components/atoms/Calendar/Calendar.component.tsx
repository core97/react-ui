import { DayPicker } from "react-day-picker";
import { CalendarProps } from "./Calendar.types";
import "react-day-picker/style.css";
import "./Calendar.css";

export const Calendar = (props: CalendarProps) => {
  return (
    <DayPicker
      {...props}
      showOutsideDays
      classNames={{ 
        root: "calendar_root",
        months: "calendar_months",
        month_grid: "calendar_month_grid",
        month_caption: "calendar_month_caption",
        nav: "calendar_month_nav",
        day: "calendar_day",
        selected: "calendar_day--selected",
        weekday: "calendar_weekday",
        weekdays: "calendar_weekdays_header",
        today: "calendar_day--today",
        outside: 'calendar_day--outside',
        range_middle: "calendar_range_middle",
        range_start: "calendar_day--range_start",
        range_end: "calendar_day--range_end",
      }}
    />
  );
};
