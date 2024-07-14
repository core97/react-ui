import { COLOR_CLASS_NAMES } from "../../../constants/class-names/color.constants";
import { FONT_SIZE_CLASS_NAMES } from "../../../constants/class-names/font-size.constants";
import { TextProps } from "./Text.types";
import styles from "./Text.module.css";

export const Text = ({
  children,
  as = "p",
  color = 'contrast-theme-900',
  size = "m",
  weight = "500",
}: TextProps) => {
  const Component = as;

  const classNames = [
    FONT_SIZE_CLASS_NAMES[size],
    styles[`font--weight-${weight}`],
    color ? COLOR_CLASS_NAMES[color] : "",
  ];

  return <Component className={classNames.join(" ")}>{children}</Component>;
};
