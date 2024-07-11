import { Props as ReactSelectProps, GroupBase } from "react-select";
import { UseControllerProps, FieldValues } from "react-hook-form";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectBaseProps<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends ReactSelectProps<Option, IsMulti, Group> {
  textHelper?: string;
}

export interface SelectFormProps<
  TFieldValues extends FieldValues,
  Option extends SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Omit<
      SelectBaseProps<Option, IsMulti, Group>,
      "name" | "defaultValue"
    >,
    UseControllerProps<TFieldValues> {}
