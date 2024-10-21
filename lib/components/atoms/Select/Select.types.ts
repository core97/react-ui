import { InputSizeMeasure } from "../../../types/input-size.types";
import { ICON_BY_NAME } from "../Icon/Icon.contants";

export type SelectOption = {
  label: string;
  value: string;
  icon?: keyof typeof ICON_BY_NAME;
};

export type Group = { group: string; options: SelectOption[] };

export interface SelectProps {
  isInvalid?: boolean;
  options?: SelectOption[] | Group[];
  onBlur?: (e: React.FocusEvent<HTMLDivElement, Element>) => void;
  disabled?: boolean;
  placeholder?: string;
  searcher?: boolean;
  searcherPlaceholder?: string;
  size?: keyof typeof InputSizeMeasure;
}

export interface SelectSingleValueProps extends SelectProps {
  defaultValue?: string;
  isMulti?: false;
  onChange?: (value: string) => void;
  value?: string;
}

export interface SelectMultiValueProps extends SelectProps {
  defaultValue?: string[];
  isMulti?: true;
  onChange?: (value: string[]) => void;
  value?: string[];
}
