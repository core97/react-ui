import React, { forwardRef } from "react";
import { OptionTag } from "../OptionTag";
import { Text } from "../../Text";
import { Icon } from "../../Icon";
import { ICON_SIZE } from "../Select.constants";
import { INPUT_SIZE_CLASS_NAMES } from "../../../../constants/class-names/input-size.constants";
import { SelectTriggerProps } from "./SelectTrigger.types";
import styles from "./SelectTrigger.module.css";

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (
    {
      onClick,
      onClickOptionTag,
      selected,
      size,
      disabled,
      isInvalid,
      isMulti,
      isOpen,
      placeholder,
    },
    ref
  ) => {
    return (
      <button
        type="button"
        onClick={onClick}
        ref={ref}
        role="combobox"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`${styles.trigger_button} ${isInvalid ? styles["trigger_button--error"] : ""} ${INPUT_SIZE_CLASS_NAMES[size]}`}
      >
        {!!(isMulti && selected.length) && (
          <ul className={styles.trigger_button__selected_options_list}>
            {selected.map((item) => (
              <OptionTag
                key={item.value}
                size={size}
                label={item.label}
                value={item.value}
                onRemove={onClickOptionTag}
              />
            ))}
          </ul>
        )}

        {!!(!isMulti && selected[0]) && (
          <Text size={size} className={styles.trigger_button__text}>
            {selected[0].label}
          </Text>
        )}

        {!selected.length && (
          <Text
            as="span"
            color="contrast-theme-100"
            size={size}
            className={styles.trigger_button__text}
          >
            {placeholder}
          </Text>
        )}

        <div
          className={
            isInvalid ? styles["trigger_button__icon-wrapper--error"] : ""
          }
        >
          <Icon name="chevron_down" size={ICON_SIZE[size]} />
        </div>
      </button>
    );
  }
);
