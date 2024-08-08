export type RowContent = Record<string, string | React.ReactNode>;

export type Row<T extends RowContent> = {
  content: T;
  id: string;
};

export type TableAction<T extends RowContent> = {
  label: string;
  onClick: (row: Row<T>) => void;
};

export type SortType = "asc" | "desc";

export type Sorting<T extends RowContent> = { field: keyof T; type: SortType };

export interface TableProps<T extends RowContent> {
  columns: Record<keyof T, string>;
  rows: Row<T>[];
  actions?: TableAction<T>[];
  footer?: React.ReactNode | React.ReactNode[];
  onRowSelect?: (rowIds: string[]) => void;
  onSorting?: (sortBy?: Sorting<T>) => void;
  selectedRows?: string[];
}
