import { TableRowProps } from "./TableRow.types";
import styles from "./TableRow.module.css";

export const TableRow = ({ children, ...restProps }: TableRowProps) => {
  return (
    <tr {...restProps} className={`${styles.row} ${restProps.className || ""}`}>
      {children}
    </tr>
  );
};
