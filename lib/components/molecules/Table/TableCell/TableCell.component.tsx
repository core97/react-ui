import { TableCellProps } from "./TableCell.types";
import styles from "./TableCell.module.css";

export const TableCell = ({ children, ...restProps }: TableCellProps) => {
  return (
    <td
      {...restProps}
      className={`${styles.cell} ${restProps.className || ""}`}
    >
      {children}
    </td>
  );
};
