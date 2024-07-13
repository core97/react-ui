import { ColorName } from "../../../types/colors.types";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: ColorName;
  isLoading?: boolean;
  size?: "xs" | "s" | "m" | "l" | "xl";
  variant?: "filled" | "outline" | "ghost" | "link";
}
