import { ICON_BY_NAME } from "./Icon.contants";
import { Color } from "../../../types/colors.types";

export type IconSvgProps = {
  className?: string;
  size?: number;
};

export interface IconProps extends IconSvgProps {
  name: keyof typeof ICON_BY_NAME;
  color?: keyof typeof Color;
}
