import { COLOR_CLASS_NAMES } from "../../../constants/class-names/color.constants";
import { IconProps } from "./Icon.types";
import { ICON_BY_NAME } from "./Icon.contants";

// https://yesicon.app/

export const Icon = ({ name, className, color, size }: IconProps) => {
  const Component = ICON_BY_NAME[name];

  return (
    <Component
      size={size}
      className={`${color ? COLOR_CLASS_NAMES[color] : ""} ${className || ""}`}
    />
  );
};
