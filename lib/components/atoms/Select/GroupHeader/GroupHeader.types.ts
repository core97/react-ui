import { SelectProps } from "../Select.types";

type GroupHeaderSize = NonNullable<SelectProps["size"]>;

export interface GroupHeaderProps {
  size: GroupHeaderSize;
  children?: React.ReactNode;
}
