import { Icon } from "../Icon";
import { FONT_SIZE_CLASS_NAMES } from "../../../constants/class-names/font-size.constants";
import { INPUT_SIZE_CLASS_NAMES } from "../../../constants/class-names/input-size.constants";
import { InputTextProps } from "./InputText.types";
import { ICON_SIZE } from "./InputText.constants";
import styles from "./InputText.module.css";

export const InputText = ({
  type = "text",
  size = "m",
  iconLeft,
  iconRight,
  isInvalid,
  ...rest
}: InputTextProps) => {
  const classNames = [
    styles.input_text,
    FONT_SIZE_CLASS_NAMES[size],
    INPUT_SIZE_CLASS_NAMES[size],
    iconLeft ? styles[`input_text--size-${size}-with-icon-left`] : "",
    iconRight ? styles[`input_text--size-${size}-with-icon-right`] : "",
  ];

  return (
    <div className={`${styles.input_text_wrapper} ${rest.className || ""}`}>
      <input
        {...rest}
        type={type}
        aria-invalid={!!isInvalid}
        className={classNames.join(" ")}
      />

      {iconLeft && (
        <span
          className={`${styles.input_text_icon} ${styles[`input_text__icon-left--${size}`]}`}
        >
          <Icon name={iconLeft} size={ICON_SIZE[size]} />
        </span>
      )}

      {iconRight && (
        <span
          className={`${styles.input_text_icon} ${styles[`input_text__icon-right--${size}`]}`}
        >
          <Icon name={iconRight} size={ICON_SIZE[size]} />
        </span>
      )}
    </div>
  );
};
