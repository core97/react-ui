import { Text } from "../../Text";
import { Icon } from "../../Icon";
import { ICON_SIZE } from "../Select.constants";
import { OptionTagProps } from "./OptionTag.types";
import styles from "./OptionTag.module.css";

export const OptionTag = ({ label, onRemove, value, size }: OptionTagProps) => {
  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    onRemove(value);
  };

  return (
    <li className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <Text as="span" size={size} className={styles.text_wrapper__content}>
          {label}
        </Text>
      </div>

      <button type="button" onClick={handleOnClick} className={styles.button}>
        <Icon name="close" size={ICON_SIZE[size]} />
      </button>
    </li>
  );
};