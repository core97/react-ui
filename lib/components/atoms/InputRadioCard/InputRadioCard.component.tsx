import { forwardRef } from "react";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { INPUT_SIZE_CLASS_NAMES } from "../../../constants/class-names/input-size.constants";
import { InputRadioCardProps } from "./InputRadioCard.types";
import { ICON_SIZE } from "./InputRadioCard.constants";
import styles from "./InputRadioCard.module.css";

export const InputRadioCard = forwardRef<HTMLInputElement, InputRadioCardProps>(
  (props, ref) => {
    const {
      size = "m",
      direction = "vertical",
      label,
      icon,
      ...inputProps
    } = props;

    const id = props.id || props.name;

    return (
      <label htmlFor={id} className={props.className}>
        <input
          {...inputProps}
          ref={ref}
          id={id}
          type="radio"
          className={`${styles.input} ${props.isInvalid ? styles["input--is-invalid"] : ""}`}
          {...(props?.required && { "aria-required": "true" })}
          {...(props.isInvalid && { "aria-invalid": "true" })}
        />
        <span
          className={`${styles.card_wrapper} ${styles[`card_wrapper--direction-${direction}`]} ${INPUT_SIZE_CLASS_NAMES[size]}`}
        >
          {!!icon && <Icon name={icon} size={ICON_SIZE[size][direction]} />}

          {props.label && (
            <Text as="span" size={size}>
              {label}
            </Text>
          )}
        </span>
      </label>
    );
  }
);
