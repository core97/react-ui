import { Text } from "../../Text";
import { Icon } from "../../Icon";
import { ICON_SIZE } from "../Select.constants";
import { SelectOptionProps } from "./SelectOption.types";
import styles from "./SelectOption.module.css";

export const SelectOption = ({
  label,
  size,
  value,
  icon,
  isSelected,
  onClick,
}: SelectOptionProps) => {
  return (
    <li
      role="option"
      onClick={() => onClick?.(value)}
      aria-selected={!!isSelected}
      tabIndex={-1}
      className={`${styles.wrapper} ${isSelected ? styles["wrapper--selected"] : ""}`}
    >
      <div
        className={`${styles["selected_icon"]} ${
          isSelected
            ? styles["selected_icon--selected"]
            : styles["selected_icon--no-selected"]
        }`}
      >
        <Icon name="checked" size={ICON_SIZE[size]} />
      </div>

      <div className={styles.label_wrapper}>
        {Boolean(icon) && (
          <div
            className={`${styles.label_icon_wrapper} ${styles[`label_icon_wrapper--size-${size}`]}`}
          >
            {icon}
          </div>
        )}
        <Text as="span" size={size}>
          {label}
        </Text>
      </div>
    </li>
  );
};
