import { SortType } from "../Table.types";

export interface TableHeaderCellProps
  extends React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  sortType?: SortType;
}
