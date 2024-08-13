import { CalendarProps } from "../../../atoms/Calendar";
import { DatePickerProps } from "../DatePicker.types";
import { NonNullable } from "../../../../types/utils.types";

type DatePickerTriggerSize = NonNullable<DatePickerProps['size']>

export interface DatePickerTriggerProps {
  size: DatePickerTriggerSize;
  mode: NonNullable<CalendarProps['mode']>;
  onClick?: () => void;
  selected?: string[];
  disabled?: boolean;
  isInvalid?: boolean;
  locale?: CalendarProps['locale'];
  placeholder?: string;
}
