import { Color } from "../../../types/colors.types";
import { FontSizeMeasure } from "../../../types/font-size.types";

export enum TextTagAs {
  "h1" = "h1",
  "h2" = "h2",
  "h3" = "h3",
  "h4" = "h4",
  "h5" = "h5",
  "h6" = "h6",
  "label" = "label",
  "p" = "p",
  "details" = "details",
  "span" = "span",
}

export enum TextWeight {
  "100w" = "100",
  "200w" = "200",
  "300w" = "300",
  "400w" = "400",
  "500w" = "500",
  "600w" = "600",
  "700w" = "700",
  "800w" = "800",
  "900w" = "900",
}

export interface TextProps {
  children: React.ReactNode;
  as?: keyof typeof TextTagAs;
  className?: string;
  color?: keyof typeof Color;
  htmlFor?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >["htmlFor"];
  role?: React.HtmlHTMLAttributes<HTMLElement>["role"];
  size?: FontSizeMeasure;
  weight?: keyof typeof TextWeight;
}
