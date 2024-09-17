import { SelectOption, SelectProps } from "../Select.types";
import { NonNullable } from "../../../../types/utils.types";

type SelectTriggerSize = NonNullable<SelectProps['size']>

export interface SelectTriggerProps {
  onClick: () => void;
  onClickOptionTag: (value: string) => void;
  size: SelectTriggerSize;
  selected: SelectOption[];
  disabled?: boolean;
  isInvalid?: boolean;
  isMulti?: boolean;
  isOpen?: boolean;
  placeholder?: string;
}
