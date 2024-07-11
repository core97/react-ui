import ReactSelect, { GroupBase } from "react-select";
import { SelectOption, SelectBaseProps } from "./Select.types";

export const SelectBase = <
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  ...props
}: SelectBaseProps<Option, IsMulti, Group>) => {
  return (
    <ReactSelect
      {...props}
      getOptionValue={(option) => option.value}
      getOptionLabel={(option) => option.label}
    />
  );
};
