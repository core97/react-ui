import React from "react";
import { Spinner } from "../Spinner";
import { ButtonProps } from "./Button.types";
import { SPINNER_SIZE } from "./Button.constants";
import styles from "./Button.module.css";

export const Button = ({
  color = "contrast-theme",
  children,
  disabled,
  isLoading,
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
  ];

  return (
    <button
      type="button"
      {...rest}
      disabled={isLoading || disabled}
      className={classNames.join(" ")}
    >
      {isLoading && (
        <div className={styles.button__spinner}>
          <Spinner customSize={`${SPINNER_SIZE[size]}px`} />
        </div>
      )}
      {children}
    </button>
  );
};
