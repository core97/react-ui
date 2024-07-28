import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { Popover } from "../Popover";
import { SelectOption } from "./SelectOption";
import { SearchInput } from "./SearchInput";
import { SelectTrigger } from "./SelectTrigger";
import { SelectOptionList } from "./SelectOptionList";
import { GroupHeader } from "./GroupHeader";
import {
  Group,
  SelectOption as SelectOptionType,
  SelectMultiValueProps,
  SelectSingleValueProps,
} from "./Select.types";
import {
  isSelected,
  getSelectedFromOptions,
  getOptionByValue,
} from "./Select.helper";

export const Select = forwardRef<
  HTMLDivElement,
  SelectMultiValueProps | SelectSingleValueProps
>((props: SelectMultiValueProps | SelectSingleValueProps, ref) => {
  const [selected, setSelected] = useState<SelectOptionType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchRegex, setSearchRegex] = useState(new RegExp(""));

  const selectRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  const { isOpen, onClose, onToggle } = useDisclosure();

  const size = props.size || "m";

  useImperativeHandle(ref, () => selectRef.current as HTMLDivElement);

  const handleOnClose = () => {
    if (isOpen) {
      triggerButtonRef.current?.focus();
    }

    onClose();
    setSearchRegex(new RegExp(""));
    setSearchValue("");
  };

  const handleOnChange = (action: "ADD" | "REMOVE", value: string) => {
    let result = selected;

    if (action === "ADD") {
      const option = getOptionByValue(value, props.options);
      const isAlreadySelected = selected.find((item) => item.value === value);

      if (option && props.isMulti && isAlreadySelected) {
        result = result.filter((item) => item.value !== value);
      } else if (option && props.isMulti) {
        result.push(option);
      } else if (option && !props.isMulti) {
        result = [option];
      }
    } else if (action === "REMOVE") {
      result = result.filter((el) => el.value !== value);
    }

    setSelected(result);

    if (props.isMulti) {
      props.onChange?.(result.map(({ value }) => value));
    } else {
      (props.onChange as SelectSingleValueProps["onChange"])?.(value);
    }

    triggerButtonRef.current?.focus();

    onClose();
    setSearchRegex(new RegExp(""));
    setSearchValue("");
  };

  useEffect(() => {
    const valueFromProps = props.value || props.defaultValue || "";

    setSelected(getSelectedFromOptions(valueFromProps, props.options));
  }, [props.defaultValue, props.options, props.value]);

  return (
    <Popover
      ref={selectRef}
      sizeAsTrigger
      placement="bottom"
      isOpen={isOpen}
      onClose={handleOnClose}
      onBlur={props.onBlur}
      trigger={
        <SelectTrigger
          ref={triggerButtonRef}
          onClick={onToggle}
          onClickOptionTag={(value) => handleOnChange("REMOVE", value)}
          selected={selected}
          size={size}
          disabled={props.disabled}
          isInvalid={props.isInvalid}
          isMulti={props.isMulti}
          isOpen={isOpen}
          placeholder={props.placeholder}
        />
      }
      content={
        <SelectOptionList>
          {props.searcher && (
            <SearchInput
              size={size}
              placeholder={props.searcherPlaceholder}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setSearchRegex(new RegExp(e.target.value, "i"));
              }}
            />
          )}

          {props.options
            ?.filter((item) =>
              "label" in item ? searchRegex.test(item.label) : true
            )
            ?.map((item: SelectOptionType | Group) => {
              if ("group" in item) {
                return (
                  <li key={item.group}>
                    <GroupHeader size={size}>{item.group}</GroupHeader>
                    <ul>
                      {item.options
                        ?.filter((item) => searchRegex.test(item.label))
                        .map((el) => (
                          <SelectOption
                            key={el.value}
                            size={size}
                            label={el.label}
                            value={el.value}
                            icon={el.icon}
                            onClick={(value) => handleOnChange("ADD", value)}
                            isSelected={isSelected(
                              el.value,
                              selected.map(({ value }) => value)
                            )}
                          />
                        ))}
                    </ul>
                  </li>
                );
              }

              return (
                <SelectOption
                  key={item.value}
                  size={size}
                  label={item.label}
                  value={item.value}
                  icon={item.icon}
                  onClick={(value) => handleOnChange("ADD", value)}
                  isSelected={isSelected(
                    item.value,
                    selected.map(({ value }) => value)
                  )}
                />
              );
            })}
        </SelectOptionList>
      }
    />
  );
});
