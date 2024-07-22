import { FONT_SIZE_CLASS_NAMES } from "../../../../constants/class-names/font-size.constants";
import { INPUT_SIZE_CLASS_NAMES } from "../../../../constants/class-names/input-size.constants";
import { SearchInputProps } from "./SearchInput.types";
import { SIZE } from "./SearchInput.constants";
import styles from "./SearchInput.module.css";

export const SearchInput = ({
  placeholder = "Buscar",
  onChange,
  size,
  value,
}: SearchInputProps) => {
  return (
    <li className={styles.search_input_wrapper}>
      <input
        type="text"
        className={`${styles.search_input} ${FONT_SIZE_CLASS_NAMES[SIZE[size]]} ${INPUT_SIZE_CLASS_NAMES[SIZE[size]]}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </li>
  );
};
