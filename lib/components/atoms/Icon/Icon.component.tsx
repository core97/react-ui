import { IconProps } from "./Icon.types";
import { ICON_BY_NAME } from "./Icon.contants";

// https://yesicon.app/

export const Icon = ({ name, ...rest }: IconProps) => {
  const Component = ICON_BY_NAME[name];

  return <Component {...rest} />;
};
