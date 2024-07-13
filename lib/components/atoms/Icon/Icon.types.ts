import { ICON_BY_NAME } from "./Icon.contants";

export type IconSvgProps = {
  color?: string;
  size?: number;
};

export interface IconProps extends IconSvgProps {
  name: keyof typeof ICON_BY_NAME;
}
