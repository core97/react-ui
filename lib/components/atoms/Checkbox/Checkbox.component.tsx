import { CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.css";

// TODO: https://uiverse.io/myshy13/blue-frog-13

export const Checkbox = ({ size = "m", isInvalid, ...rest }: CheckboxProps) => {
  return (
    <label
      className={`${styles.container} ${styles[`container--size-${size}`]}`}
    >
      <input
        type="checkbox"
        {...rest}
        {...(rest?.required && { "aria-required": "true" })}
        {...(isInvalid && { "aria-invalid": "true" })}
      />
      <div className={styles.checkmark}></div>
    </label>
  );
};
