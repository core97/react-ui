import { SelectOption, SelectProps } from "../Select.types";
import { NonNullable } from "../../../../types/utils.types";

export interface SelectOptionProps extends SelectOption {
  size: NonNullable<SelectProps['size']>;
  isSelected?: boolean;
  onClick?: (value: string) => void;
}
