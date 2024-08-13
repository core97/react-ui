export type Color =
  /* primary */
  | "primary-100"
  | "primary-200"
  | "primary-300"
  | "primary-400"
  | "primary-500"
  | "primary-600"
  | "primary-700"
  | "primary-800"
  | "primary-900"
  /* secondary */
  | "secondary-100"
  | "secondary-200"
  | "secondary-300"
  | "secondary-400"
  | "secondary-500"
  | "secondary-600"
  | "secondary-700"
  | "secondary-800"
  | "secondary-900"
  /* light */
  | "light-100"
  | "light-200"
  | "light-300"
  | "light-400"
  | "light-500"
  | "light-600"
  | "light-700"
  | "light-800"
  | "light-900"
  /* dark */
  | "dark-100"
  | "dark-200"
  | "dark-300"
  | "dark-400"
  | "dark-500"
  | "dark-600"
  | "dark-700"
  | "dark-800"
  | "dark-900"
  /* theme */
  | "theme-100"
  | "theme-200"
  | "theme-300"
  | "theme-400"
  | "theme-500"
  | "theme-600"
  | "theme-700"
  | "theme-800"
  | "theme-900"
  /* contrast theme */
  | "contrast-theme-100"
  | "contrast-theme-200"
  | "contrast-theme-300"
  | "contrast-theme-400"
  | "contrast-theme-500"
  | "contrast-theme-600"
  | "contrast-theme-700"
  | "contrast-theme-800"
  | "contrast-theme-900"
  /* sucess */
  | "success-100"
  | "success-200"
  | "success-300"
  | "success-400"
  | "success-500"
  | "success-600"
  | "success-700"
  | "success-800"
  | "success-900"
  /* info */
  | "info-100"
  | "info-200"
  | "info-300"
  | "info-400"
  | "info-500"
  | "info-600"
  | "info-700"
  | "info-800"
  | "info-900"
  /* warning */
  | "warning-100"
  | "warning-200"
  | "warning-300"
  | "warning-400"
  | "warning-500"
  | "warning-600"
  | "warning-700"
  | "warning-800"
  | "warning-900"
  /* error */
  | "error-100"
  | "error-200"
  | "error-300"
  | "error-400"
  | "error-500"
  | "error-600"
  | "error-700"
  | "error-800"
  | "error-900";

export enum ColorName {
  primary = "primary",
  secondary = "secondary",
  theme = "theme",
  "contrast-theme" = "contrast-theme",
  light = "light",
  dark = "dark",
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}
