import { SelectProps } from "../Select.types";
import { NonNullable } from "../../../../types/utils.types";

export interface SearchInputProps {
  size: NonNullable<SelectProps["size"]>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
}
