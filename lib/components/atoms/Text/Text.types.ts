import { Color } from "../../../types/colors.types";
import { FontSizeMeasure } from "../../../types/font-size.types";

type TextTagAs =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "details"
  | "span";

type TextWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export interface TextProps {
  children: React.ReactNode;
  as?: TextTagAs;
  className?: string;
  color?: Color;
  size?: FontSizeMeasure;
  weight?: TextWeight;
}
