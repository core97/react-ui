import { useState, useEffect, forwardRef } from "react";
import { DateRange } from "react-day-picker";
import { Popover } from "../../atoms/Popover";
import { Calendar } from "../../atoms/Calendar";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { DatePickerTrigger } from "./DatePickerTrigger";
import {
  DatePickerProps,
  DatePickerMultipleProps,
  DatePickerSingleProps,
  DatePickerRangeProps,
} from "./DatePicker.types";

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    const [selected, setSelected] = useState<string[]>([]);

    const { isOpen, onClose, onToggle } = useDisclosure();

    const size = props.size || "m";

    let PopoverContent: JSX.Element | null = null;

    const handleOnChange = (newValue?: Date | Date[] | DateRange) => {
      if (props.mode === "multiple" && Array.isArray(newValue)) {
        const datesParsed = newValue.map((item) => item.toString());
        setSelected(datesParsed);
        (props.onChange as DatePickerMultipleProps["onChange"])?.(datesParsed);
      } else if (props.mode === "single" && newValue instanceof Date) {
        setSelected([newValue.toString()]);
        (props.onChange as DatePickerSingleProps["onChange"])?.(
          newValue.toString()
        );
        onClose();
      } else if (props.mode === "range" && newValue && "from" in newValue) {
        const dates: string[] = [];

        if (newValue.from) dates.push(newValue.from.toString());

        if (newValue.to) {
          dates.push(newValue.to.toString());
          onClose();
        }

        setSelected(dates);

        (props.onChange as DatePickerRangeProps["onChange"])?.(dates);
      }
    };

    if (props.mode === "multiple") {
      PopoverContent = (
        <Calendar
          {...(props.calendarConfig || {})}
          mode={props.mode}
          selected={selected.map((item) => new Date(item))}
          onSelect={handleOnChange}
        />
      );
    } else if (props.mode === "range") {
      PopoverContent = (
        <Calendar
          {...(props.calendarConfig || {})}
          mode={props.mode}
          selected={
            selected[0]
              ? {
                  from: new Date(selected[0]),
                  ...(selected[1] && { to: new Date(selected[1]) }),
                }
              : undefined
          }
          onSelect={handleOnChange}
        />
      );
    } else if (props.mode === "single") {
      PopoverContent = (
        <Calendar
          {...(props.calendarConfig || {})}
          mode={props.mode}
          selected={selected[0] ? new Date(selected[0]) : undefined}
          onSelect={handleOnChange}
        />
      );
    }

    useEffect(() => {
      const valueFromProps = props.value || props.defaultValue || [];

      setSelected(
        Array.isArray(valueFromProps) ? valueFromProps : [valueFromProps]
      );
    }, [props.defaultValue, props.value]);

    return (
      <Popover
        ref={ref}
        placement="bottom"
        isOpen={isOpen}
        className={props.className}
        onBlur={props.onBlur}
        onClose={onClose}
        trigger={
          <DatePickerTrigger
            mode={props.mode}
            disabled={props.disabled}
            isInvalid={props.isInvalid}
            locale={props.calendarConfig?.locale}
            onClick={onToggle}
            size={size}
            placeholder={props.placeholder}
            selected={selected}
          />
        }
        content={PopoverContent}
      />
    );
  }
);
