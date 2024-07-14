import React from "react";
import { Spinner } from "../Spinner";
import { Icon, IconProps } from "../Icon";
import { FONT_SIZE_CLASS_NAMES } from "../../../constants/class-names/font-size.constants";
import { ButtonProps } from "./Button.types";
import { SIZE } from "./Button.constants";
import styles from "./Button.module.css";

export const Button = ({
  color = "contrast-theme",
  children,
  disabled,
  isLoading,
  leftIcon,
  rightIcon,
  size = "m",
  variant = "filled",
  ...rest
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[`button--size-${size}`],
    isLoading ? styles[`button--loading`] : "",
    styles[`button--variant-${variant}`],
    styles[`button--variant-${variant}-${color}`],
    FONT_SIZE_CLASS_NAMES[size],
  ];

  return (
    <button
      type="button"
      {...rest}
      disabled={isLoading || disabled}
      className={classNames.join(" ")}
    >
      {Boolean(React.isValidElement(leftIcon) && leftIcon.type === Icon) &&
        React.cloneElement(leftIcon as React.ReactElement<IconProps>, {
          size: SIZE[size],
        })}

      {isLoading && (
        <div className={styles.button__spinner}>
          <Spinner
            customSize={`${SIZE[size]}px`}
            color={
              variant === "filled" &&
              (color === "contrast-theme" || color === "theme")
                ? "theme"
                : undefined
            }
          />
        </div>
      )}

      {children}

      {Boolean(React.isValidElement(rightIcon) && rightIcon.type === Icon) &&
        React.cloneElement(rightIcon as React.ReactElement<IconProps>, {
          size: SIZE[size],
        })}
    </button>
  );
};
