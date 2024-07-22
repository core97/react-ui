import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { INPUT_SIZE_CLASS_NAMES } from "../../../constants/class-names/input-size.constants";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { useDistanceToViewport } from "../../../hooks/useDistanceToViewport";
import { SelectOption } from "./SelectOption";
import { OptionTag } from "./OptionTag";
import { SearchInput } from "./SearchInput";
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
import { ICON_SIZE } from "./Select.constants";
import styles from "./Select.module.css";

export const Select = forwardRef<
  HTMLDivElement,
  SelectMultiValueProps | SelectSingleValueProps
>((props: SelectMultiValueProps | SelectSingleValueProps, ref) => {
  const [selected, setSelected] = useState<SelectOptionType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchRegex, setSearchRegex] = useState(new RegExp(""));
  const [positionToOpen, setPositionToOpen] = useState<"top" | "bottom">(
    "bottom"
  );

  const selectRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const optionListRef = useRef<HTMLUListElement>(null);

  const { isOpen, onClose, onToggle } = useDisclosure();

  const distance = useDistanceToViewport("bottom", selectRef);

  const size = props.size || "m";

  useImperativeHandle(ref, () => selectRef.current as HTMLDivElement);

  const handleOnBlur = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    if (!selectRef.current?.contains(e.relatedTarget)) {
      if (isOpen) {
        triggerButtonRef.current?.focus();
      }

      onClose();
      setSearchRegex(new RegExp(""));
      setSearchValue("");
    }

    props.onBlur?.(e);
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

  useEffect(() => {
    const height = optionListRef.current?.getBoundingClientRect().height;

    if (typeof height === "number") {
      setPositionToOpen(distance <= height ? "top" : "bottom");
    }
  }, [distance]);

  return (
    <div ref={selectRef} className={styles.wrapper} onBlur={handleOnBlur}>
      <button
        type="button"
        onClick={onToggle}
        ref={triggerButtonRef}
        role="combobox"
        disabled={props.disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`${styles.trigger_button} ${props.isInvalid ? styles["trigger_button--error"] : ""} ${INPUT_SIZE_CLASS_NAMES[size]}`}
      >
        {!!(props.isMulti && selected.length) && (
          <ul className={styles.trigger_button__selected_options_list}>
            {selected.map((item) => (
              <OptionTag
                key={item.value}
                size={size}
                label={item.label}
                value={item.value}
                onRemove={(value) => handleOnChange("REMOVE", value)}
              />
            ))}
          </ul>
        )}

        {!!(!props.isMulti && selected[0]) && (
          <Text size={size} className={styles.trigger_button__text}>
            {selected[0].label}
          </Text>
        )}

        {!selected.length && (
          <Text
            as="span"
            color="contrast-theme-100"
            size={size}
            className={styles.trigger_button__text}
          >
            {props.placeholder}
          </Text>
        )}

        <div
          className={
            props.isInvalid ? styles["trigger_button__icon-wrapper--error"] : ""
          }
        >
          <Icon name="chevron_down" size={ICON_SIZE[size]} />
        </div>
      </button>
      <ul
        ref={optionListRef}
        role="listbox"
        aria-hidden={!isOpen}
        className={`${styles.options_list} ${isOpen ? styles["options_list--opened"] : ""} ${styles[`options_list--open-${positionToOpen}`]}`}
      >
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
                  <header
                    className={`${styles.options_list__header_group} ${styles[`options_list__header_group--${size}`]}`}
                  >
                    <Text weight="700">{item.group}</Text>
                  </header>
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
      </ul>
    </div>
  );
});
