import { SelectOption, SelectProps } from "../Select.types";
import { NonNullable } from "../../../../types/utils.types";

export interface OptionTagProps extends Omit<SelectOption, "icon"> {
  onRemove: (value: SelectOption["value"]) => void;
  size: NonNullable<SelectProps["size"]>;
}
