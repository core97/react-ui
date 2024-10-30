import { SelectProps, SelectOption, Group } from "./Select.types";

export const isSelected = (
  valueFromOption: string,
  valueFromProps?: string | string[]
) =>
  Array.isArray(valueFromProps)
    ? valueFromProps.includes(valueFromOption)
    : valueFromProps === valueFromOption;

export const getSelectedFromOptions = (
  value: string | string[],
  options: SelectProps["options"]
): SelectOption[] => {
  const values = Array.isArray(value) ? value : [value];
  const selectedOptions: SelectOption[] = [];

  options?.forEach((item: SelectOption | Group) => {
    if ("group" in item) {
      selectedOptions.push(
        ...item.options.filter((el) => values.includes(el.value))
      );
    } else if (values.includes(item.value)) {
      selectedOptions.push(item);
    }
  });

  return selectedOptions;
};

export const getOptionByValue = (
  value: string,
  options: SelectProps["options"]
): SelectOption | undefined => {
  let option: SelectOption | undefined = undefined;

  for (const item of options || []) {
    if ("group" in item) {
      const found = item.options.find((el) => el.value === value);

      if (found) {
        option = found;
        break;
      }
    } else if (item.value === value) {
      option = item;
      break;
    }
  }

  return option;
};
