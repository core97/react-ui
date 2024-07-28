import { SelectOptionListProps } from "./SelectOptionList.types";
import styles from "./SelectOptionList.module.css";

export const SelectOptionList = ({ children }: SelectOptionListProps) => {
  return (
    <ul role="listbox" className={styles.options_list}>
      {children}
    </ul>
  );
};
