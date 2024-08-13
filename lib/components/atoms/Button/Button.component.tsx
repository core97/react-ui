import { useState, useEffect, forwardRef } from "react";
import { Spinner, SpinnerProps } from "../Spinner";
import { Icon } from "../Icon";
import { useTheme } from "../../../hooks/useTheme";
import { FONT_SIZE_CLASS_NAMES } from "../../../constants/class-names/font-size.constants";
import { INPUT_SIZE_CLASS_NAMES } from "../../../constants/class-names/input-size.constants";
import { ColorName } from "../../../types/colors.types";
import { ButtonProps } from "./Button.types";
import { ICON_SIZE } from "./Button.constants";
import styles from "./Button.module.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color = "contrast-theme",
      children,
      disabled,
      isFullWidth,
      isLoading,
      iconLeft,
      iconRight,
      size = "m",
      variant = "filled",
      ...rest
    },
    ref
  ) => {
    const [spinnerColor, setSpinnerColor] = useState<SpinnerProps["color"]>();

    const { colorScheme } = useTheme();

    const classNames = [
      styles.button,
      styles[`button--size-${size}`],
      isLoading ? styles[`button--loading`] : "",
      isFullWidth ? styles[`button--full-width`] : "",
      styles[`button--variant-${variant}`],
      styles[`button--variant-${variant}-${color}`],
      FONT_SIZE_CLASS_NAMES[size],
      INPUT_SIZE_CLASS_NAMES[size],
    ];

    useEffect(() => {
      const isThemeColor = (
        ["contrast-theme", "theme"] as Array<keyof typeof ColorName>
      ).includes(color);

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
        ref={ref}
        type="button"
        {...rest}
        disabled={isLoading || disabled}
        className={`${classNames.join(" ")} ${className || ""}`}
      >
        {iconLeft && <Icon name={iconLeft} size={ICON_SIZE[size]} />}

        {isLoading && (
          <div className={styles.button__spinner}>
            <Spinner customSize={`${ICON_SIZE[size]}px`} color={spinnerColor} />
          </div>
        )}

        {children}

        {iconRight && <Icon name={iconRight} size={ICON_SIZE[size]} />}
      </button>
    );
  }
);
