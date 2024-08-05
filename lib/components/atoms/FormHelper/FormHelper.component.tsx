import { Text } from "../Text";
import { FormHelperProps } from "./FormHelper.types";

export const FormHelper = ({
  as = "span",
  children,
  variant = "info",
  ...restProps
}: FormHelperProps) => {
  return (
    <Text
      as={as}
      weight="500"
      size="xs"
      color={variant === "info" ? "contrast-theme-100" : "error-500"}
      {...(variant === "error" && { role: "alert" })}
      {...restProps}
    >
      {children}
    </Text>
  );
};
