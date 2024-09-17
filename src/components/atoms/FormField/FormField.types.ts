export enum FormFieldDirection {
  column = "column",
  row = "row",
}

export interface FormFieldProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  direction?: `${FormFieldDirection.column}` | `${FormFieldDirection.row}`;
}
