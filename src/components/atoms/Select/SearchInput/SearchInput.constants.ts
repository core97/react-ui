import { SelectProps } from "../Select.types";
import { NonNullable } from "../../../../types/utils.types";
import { InputSizeMeasure } from "../../../../types/input-size.types";

type SizeFromSelecct = NonNullable<SelectProps["size"]>;

export const SIZE: Record<SizeFromSelecct, InputSizeMeasure> = {
  xs: InputSizeMeasure.xs,
  s: InputSizeMeasure.xs,
  m: InputSizeMeasure.s,
  l: InputSizeMeasure.s,
  xl: InputSizeMeasure.m,
};
