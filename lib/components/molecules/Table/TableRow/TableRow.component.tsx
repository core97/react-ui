import { TableRowProps } from "./TableRow.types";

export const TableRow = ({ children, ...restProps }: TableRowProps) => {
  return <tr {...restProps}>{children}</tr>;
};
