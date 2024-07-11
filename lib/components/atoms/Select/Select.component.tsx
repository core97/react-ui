import { GroupBase } from "react-select";
import { SelectBase } from "./SelectBase.component";
import { SelectForm } from "./SelectForm.component";
import { SelectBaseProps, SelectFormProps, SelectOption } from "./Select.types";

export const Select = <
  TFormValues extends Record<string, unknown>,
  Option extends SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
    props:
    | SelectFormProps<TFormValues, Option, IsMulti, Group>
    | SelectBaseProps<Option, IsMulti, Group>
) => {
  if ("control" in props && props.control) {
    return (
      <SelectForm
        {...(props as SelectFormProps<TFormValues, Option, IsMulti, Group>)}
      />
    );
  }

  return <SelectBase {...(props as SelectBaseProps<Option, IsMulti, Group>)} />;
};
