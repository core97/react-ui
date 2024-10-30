import { Text } from "../../Text";
import { GroupHeaderProps } from "./GroupHeader.types";
import styles from "./GroupHeader.module.css";

export const GroupHeader = ({ children, size }: GroupHeaderProps) => {
  return (
    <header
      className={`${styles.group_header} ${styles[`group_header--${size}`]}`}
    >
      <Text weight="300w" color="contrast-theme-200">{children}</Text>
    </header>
  );
};
