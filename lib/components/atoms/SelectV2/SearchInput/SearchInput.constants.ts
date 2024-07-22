import { SelectProps } from "../Select.types";
import { NonNullable } from "../../../../types/utils.types";
import { InputSizeMeasure } from "../../../../types/input-size.types";

type  SizeFromSelecct = NonNullable<SelectProps["size"]>

export const SIZE: Record<SizeFromSelecct, InputSizeMeasure> = {
  xs: "xs",
  s: "xs",
  m: "s",
  l: "s",
  xl: "m",
};
