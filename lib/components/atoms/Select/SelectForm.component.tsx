import { GroupBase, MultiValue, SingleValue, PropsValue } from "react-select";
import { useController } from "react-hook-form";
import { SelectBase } from "./SelectBase.component";
import { SelectOption, SelectFormProps } from "./Select.types";

export const SelectForm = <
  TFormValues extends Record<string, unknown>,
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  disabled,
  ...props
}: SelectFormProps<TFormValues, Option, IsMulti, Group>) => {
  const { field } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    disabled,
  });

  const handleOnChange = (
    newValue: SingleValue<SelectOption> | MultiValue<SelectOption>
  ) => {
    if (Array.isArray(newValue) && props.isMulti) {
      field.onChange(newValue);
    } else if (newValue !== null && !props.isMulti) {
      field.onChange(newValue);
    }
  };

  return (
    <SelectBase
      {...props}
      name={field.name}
      isDisabled={field.disabled}
      value={field.value as PropsValue<Option> | undefined}
      onChange={handleOnChange}
      onBlur={field.onBlur}
    />
  );
};
