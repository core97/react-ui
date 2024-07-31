import { CalendarProps } from "../../../atoms/Calendar";
import { DatePickerProps } from "../DatePicker.types";
import { NonNullable } from "../../../../types/utils.types";

type DatePickerTriggerSize = NonNullable<DatePickerProps['size']>

export interface DatePickerTriggerProps {
  onClick: () => void;
  size: DatePickerTriggerSize;
  mode: NonNullable<CalendarProps['mode']>;
  selected?: string[];
  disabled?: boolean;
  isInvalid?: boolean;
  locale?: CalendarProps['locale'];
  placeholder?: string;
}
