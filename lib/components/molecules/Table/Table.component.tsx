import { useState } from "react";
import { Popover } from "../../atoms/Popover";
import { Checkbox } from "../../atoms/Checkbox";
import { Icon } from "../../atoms/Icon";
import { Button } from "../../atoms/Button";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableHeaderCell } from "./TableHeaderCell";
import { TableProps, Sorting, RowContent } from "./Table.types";
import styles from "./Table.module.css";

export const Table = <T extends RowContent>({
  columns,
  rows,
  actions,
  footer,
  onRowSelect,
  onSorting,
  selectedRows,
}: TableProps<T>) => {
  const [isCheckedAllRows, setIsCheckedAllRows] = useState(false);
  const [sorting, setSorting] = useState<Sorting<T> | undefined>();

  const handleOnSelectRow = (rowId: string) => () => {
    const isChecked = selectedRows?.some((el) => el === rowId);
    const rowsFiltered = selectedRows?.filter((el) => el !== rowId) || [];
    const rowsWithNew = [...(selectedRows || []), rowId];

    onRowSelect?.(isChecked ? rowsFiltered : rowsWithNew);

    if (isCheckedAllRows && isChecked) {
      setIsCheckedAllRows(false);
    }
  };

  const handleOnSelectAllRow = () => {
    onRowSelect?.(isCheckedAllRows ? [] : rows.map(({ id }) => id));
    setIsCheckedAllRows((prev) => !prev);
  };

  const handleOnClickHeaderCell = (columnKey: keyof typeof columns) => {
    if (!onSorting) return;

    if (columnKey !== sorting?.field) {
      setSorting({ field: columnKey, type: "asc" });
      onSorting({ field: columnKey, type: "asc" });
    } else if (columnKey === sorting?.field && sorting.type === "asc") {
      setSorting({ field: columnKey, type: "desc" });
      onSorting({ field: columnKey, type: "desc" });
    } else if (columnKey === sorting?.field && sorting.type === "desc") {
      setSorting(undefined);
      onSorting();
    }
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <TableRow>
            {!!onRowSelect && (
              <TableHeaderCell>
                <Checkbox
                  size="xs"
                  checked={isCheckedAllRows}
                  onChange={handleOnSelectAllRow}
                />
              </TableHeaderCell>
            )}

            {Object.entries(columns).map(([key, value]) => (
              <TableHeaderCell
                key={key}
                onClick={
                  onSorting ? () => handleOnClickHeaderCell(key) : undefined
                }
                sortType={sorting?.field === key ? sorting.type : undefined}
              >
                {value}
              </TableHeaderCell>
            ))}

            {!!actions && <TableHeaderCell></TableHeaderCell>}
          </TableRow>
        </thead>

        <tbody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {!!onRowSelect && (
                <TableCell>
                  <Checkbox
                    size="xs"
                    checked={selectedRows?.includes(row.id)}
                    onChange={handleOnSelectRow(row.id)}
                  />
                </TableCell>
              )}

              {Object.keys(columns).map((columnKey) => (
                <TableCell key={`${columnKey}-${row.id}`}>
                  {row.content[columnKey]}
                </TableCell>
              ))}

              {!!actions && (
                <TableCell>
                  <Popover
                    withContentStyles
                    position="bottom"
                    content={
                      <ul className={styles.actions_list}>
                        {actions.map((action) => (
                          <li>
                            <Button
                              onClick={() => action.onClick(row)}
                              size="s"
                              variant="ghost"
                              isFullWidth
                              color={action.color}
                              iconLeft={action.iconLeft}
                              iconRight={action.iconRight}
                            >
                              {action.label}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    }
                    trigger={
                      <Button type="button" size="xs" variant="ghost">
                        <Icon name="menu_dots" size={16} />
                      </Button>
                    }
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </tbody>

        {!!footer && <tfoot>{footer}</tfoot>}
      </table>
    </div>
  );
};
