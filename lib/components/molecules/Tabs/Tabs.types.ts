import { InputSizeMeasure } from "../../../types/input-size.types";

export enum TabAlignment {
  start = "start",
  "space-around" = "space-around",
}

export interface TabsProps {
  alignment?: keyof typeof TabAlignment;
  children?: React.ReactNode[] | React.ReactNode;
  size?: keyof typeof InputSizeMeasure;
}
