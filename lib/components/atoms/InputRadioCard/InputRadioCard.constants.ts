import { NonNullable } from "../../../types/utils.types";
import { InputRadioCardProps } from "./InputRadioCard.types";

export const ICON_SIZE: Record<
  NonNullable<InputRadioCardProps["size"]>,
  Record<NonNullable<InputRadioCardProps["direction"]>, number>
> = {
  xs: {
    horizontal: 12,
    vertical: 24,
  },
  s: {
    horizontal: 14,
    vertical: 28,
  },
  m: {
    horizontal: 16,
    vertical: 32,
  },
  l: {
    horizontal: 18,
    vertical: 36,
  },
  xl: {
    horizontal: 20,
    vertical: 40,
  },
};
