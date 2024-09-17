import { Icon } from "../../../atoms/Icon";
import { TableHeaderCellProps } from "./TableHeaderCell.types";
import styles from "./TableHeaderCell.module.css";

export const TableHeaderCell = ({
  children,
  sortType,
  ...restProps
}: TableHeaderCellProps) => {
  return (
    <th
      {...restProps}
      className={`${restProps.onClick ? styles[`cell--clickable`] : ""} ${restProps.className || ""}`}
    >
      <div className={styles.cell_wrapper}>
        {children}
        <span className={styles.icon_wrapper}>
          {sortType && (
            <Icon
              size={16}
              name={sortType === "asc" ? "arrow_up" : "arrow_down"}
            />
          )}
        </span>
      </div>
    </th>
  );
};
