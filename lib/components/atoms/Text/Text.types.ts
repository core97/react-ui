import { Color } from "../../../types/colors.types";

export type TextSize =
  | "5xl"
  | "4xl"
  | "3xl"
  | "2xl"
  | "xl"
  | "l"
  | "m"
  | "s"
  | "xs";

export type TextTagAs =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "details"
  | "span";

export type TextWeight =
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
  color?: Color;
  size?: TextSize;
  weight?: TextWeight;
}
