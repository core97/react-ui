import { forwardRef } from "react";
import { INPUT_SIZE_CLASS_NAMES } from "../../../constants/class-names/input-size.constants";
import { InputRadioCardProps } from "./InputRadioCard.types";
import styles from "./InputRadioCard.module.css";

export const InputRadioCard = forwardRef<HTMLInputElement, InputRadioCardProps>(
  (props, ref) => {
    const { children, size = "m", ...inputProps } = props;
    const id = props.id || props.name;

    return (
      <label htmlFor={id} className={props.className}>
        <input
          {...inputProps}
          ref={ref}
          id={id}
          type="radio"
          className={styles.input}
          {...(props?.required && { "aria-required": "true" })}
          {...(props.isInvalid && { "aria-invalid": "true" })}
        />
        <span
          className={`${styles.card_wrapper} ${INPUT_SIZE_CLASS_NAMES[size]}`}
        >
          {children}
        </span>
      </label>
    );
  }
);
