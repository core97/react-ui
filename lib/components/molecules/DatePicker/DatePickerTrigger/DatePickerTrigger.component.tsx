import { forwardRef } from "react";
import { Text } from "../../../atoms/Text";
import { Icon } from "../../../atoms/Icon";
import { DatePickerValue } from "../DatePickerValue";
import { ICON_SIZE } from "../DatePicker.constants";
import { INPUT_SIZE_CLASS_NAMES } from "../../../../constants/class-names/input-size.constants";
import { DatePickerTriggerProps } from "./DatePickerTrigger.types";
import styles from "./DatePickerTrigger.module.css";

export const DatePickerTrigger = forwardRef<
  HTMLButtonElement,
  DatePickerTriggerProps
>(
  (
    { onClick, selected, size, disabled, isInvalid, placeholder, mode, locale },
    ref
  ) => {
    return (
      <button
        type="button"
        onClick={onClick}
        ref={ref}
        disabled={disabled}
        className={`${styles.trigger_button} ${isInvalid ? styles["trigger_button--error"] : ""} ${styles[`trigger_button--size-${size}`]} ${INPUT_SIZE_CLASS_NAMES[size]}`}
      >
        <Icon
          name="calendar"
          size={ICON_SIZE[size]}
          color={isInvalid ? "error-500" : undefined}
        />

        <DatePickerValue mode={mode} locale={locale} selected={selected} />

        {!selected?.length && placeholder && (
          <Text
            as="span"
            color="contrast-theme-100"
            size={size}
            className={styles.trigger_button__text}
          >
            {placeholder}
          </Text>
        )}
      </button>
    );
  }
);
