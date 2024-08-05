import { Text } from "../Text";
import { FormLabelProps } from "./FormLabel.types";

export const FormLabel = ({
  as = "label",
  children,
  ...restProps
}: FormLabelProps) => {
  return (
    <Text as={as} weight="600" color="contrast-theme-700" size="s" {...restProps}>
      {children}
    </Text>
  );
};
