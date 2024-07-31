import { CalendarProps } from "../../atoms/Calendar";
import { PopoverProps } from "../../atoms/Popover";
import { InputSizeMeasure } from "../../../types/input-size.types";

export interface DatePickerBaseProps
  extends Pick<PopoverProps, "className" | "onBlur"> {
  mode: NonNullable<CalendarProps["mode"]>;
  calendarConfig?: Omit<CalendarProps, "mode" | "required">;
  disabled?: boolean;
  isInvalid?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLDivElement, Element>) => void;
  placeholder?: string;
  size?: InputSizeMeasure;
}

export interface DatePickerSingleProps extends DatePickerBaseProps {
  mode: "single";
  defaultValue?: string;
  onChange?: (date: string) => void;
  value?: string;
}

export interface DatePickerMultipleProps extends DatePickerBaseProps {
  mode: "multiple";
  defaultValue?: string[];
  onChange?: (dates: string[]) => void;
  value?: string[];
}

export interface DatePickerRangeProps extends DatePickerBaseProps {
  mode: "range";
  // First position is "from" and second position is "to"
  defaultValue?: string[];
  // First position is "from" and second position is "to"
  onChange?: (dates: string[]) => void;
  // First position is "from" and second position is "to"
  value?: string[];
}

export type DatePickerProps =
  | DatePickerSingleProps
  | DatePickerMultipleProps
  | DatePickerRangeProps;
