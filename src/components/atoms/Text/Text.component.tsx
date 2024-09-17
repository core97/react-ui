import { COLOR_CLASS_NAMES } from "../../../constants/class-names/color.constants";
import { FONT_SIZE_CLASS_NAMES } from "../../../constants/class-names/font-size.constants";
import { TextProps, TextWeight } from "./Text.types";
import styles from "./Text.module.css";

export const Text = ({
  children,
  as = "p",
  color = "contrast-theme-900",
  htmlFor,
  size = "m",
  weight = "500w",
  className,
  role,
}: TextProps) => {
  const Component = as;

  const classNames = [
    FONT_SIZE_CLASS_NAMES[size],
    styles[`font--weight-${TextWeight[weight]}`],
    color ? COLOR_CLASS_NAMES[color] : "",
    className || "",
  ];

  return (
    <Component
      className={classNames.join(" ")}
      role={role}
      {...(Component === "label" && htmlFor && { htmlFor })}
    >
      {children}
    </Component>
  );
};
