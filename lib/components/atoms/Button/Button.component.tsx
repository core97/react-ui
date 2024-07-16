import React, { useState, useEffect } from "react";
import { Spinner, SpinnerProps } from "../Spinner";
import { Icon, IconProps } from "../Icon";
import { useTheme } from "../../../hooks/useTheme";
import { FONT_SIZE_CLASS_NAMES } from "../../../constants/class-names/font-size.constants";
import { ColorName } from "../../../types/colors.types";
import { ButtonProps } from "./Button.types";
import { SIZE } from "./Button.constants";
import styles from "./Button.module.css";

export const Button = ({
  className,
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
  const [spinnerColor, setSpinnerColor] = useState<SpinnerProps["color"]>();

  const { colorScheme } = useTheme();

  const classNames = [
    styles.button,
    styles[`button--size-${size}`],
    isLoading ? styles[`button--loading`] : "",
    styles[`button--variant-${variant}`],
    styles[`button--variant-${variant}-${color}`],
    FONT_SIZE_CLASS_NAMES[size],
  ];

  useEffect(() => {
    const isThemeColor = (["contrast-theme", "theme"] as ColorName[]).includes(
      color
    );

    if (colorScheme === "light") {
      if (variant === "filled") {
        setSpinnerColor("light");
      }

      if (variant === "outline" && isThemeColor) {
        setSpinnerColor("dark");
      }
    }

    if (colorScheme === "dark") {
      if (variant === "filled" && isThemeColor) {
        setSpinnerColor("dark");
      }

      if (variant === "outline" && isThemeColor) {
        setSpinnerColor("light");
      }
    }
  }, [color, colorScheme, variant]);

  return (
    <button
      type="button"
      {...rest}
      disabled={isLoading || disabled}
      className={`${classNames.join(" ")} ${className || ""}`}
    >
      {Boolean(React.isValidElement(leftIcon) && leftIcon.type === Icon) &&
        React.cloneElement(leftIcon as React.ReactElement<IconProps>, {
          size: SIZE[size],
        })}

      {isLoading && (
        <div className={styles.button__spinner}>
          <Spinner customSize={`${SIZE[size]}px`} color={spinnerColor} />
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
